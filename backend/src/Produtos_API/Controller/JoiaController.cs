using Microsoft.AspNetCore.Mvc;
using Produtos_API.DTOs;
using Produtos_API.Models;
using Produtos_API.Repositories;

namespace Produtos_API.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class JoiaController : ControllerBase
    {
        private readonly IJoiaRepository _repository;
        public JoiaController(IJoiaRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<JoiaResponseDto>> ObterPorIdAsync(int id)
        {
            var joia = await _repository.ObterPorIdAsync(id);
            if(joia == null) { return NotFound($"Nenhuma Jóia com Id: {id} encontrada."); }
            var response = new JoiaResponseDto
            {
                Id = joia.Id,
                Nome = joia.Nome,
                Descricao = joia.Descricao,
                Preco = joia.Preco,
                UrlImagem = joia.UrlImagem,
                Categoria = joia.Categoria,
            };
            return Ok(response);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<JoiaResponseDto>>> ObterTodosAsync()
        {
            var joias = await _repository.ObterTodosAsync();
            var response = joias.Select(j => new JoiaResponseDto
            {
                Id = j.Id,
                Nome = j.Nome,
                Descricao = j.Descricao,
                Preco = j.Preco,
                UrlImagem = j.UrlImagem,
                Categoria = j.Categoria,
            }).ToList();
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<JoiaResponseDto>> CriarJoiaAsync(JoiaCreateDto joiaDto)
        {
            var joia = new Joia
            {
                Nome = joiaDto.Nome,
                Descricao = joiaDto.Descricao,
                Preco = joiaDto.Preco ?? 0m,
                UrlImagem = joiaDto.UrlImagem,
                Categoria = joiaDto.Categoria,
            };
            var joiaCriada = await _repository.CriarJoiaAsync(joia);
            var response = new JoiaResponseDto
            {
                Id = joiaCriada.Id,
                Nome = joiaCriada.Nome,
                Descricao = joiaCriada.Descricao,
                Preco = joiaCriada.Preco,
                UrlImagem = joiaCriada.UrlImagem,
                Categoria = joiaCriada.Categoria
            };
            return CreatedAtAction("ObterPorId", new { id = response.Id }, response);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<JoiaResponseDto>> AtualizarJoiaAsync(int id, [FromBody] JoiaCreateDto joiaDto)
        {
            var joia = new Joia
            {
                Id = id,
                Nome = joiaDto.Nome,
                Descricao = joiaDto.Descricao,
                Preco = joiaDto.Preco ?? 0m,
                UrlImagem = joiaDto.UrlImagem,
                Categoria = joiaDto.Categoria,
            };
            var joiaAtualizada = await _repository.AtualizarJoiaAsync(joia);
            if(joiaAtualizada == null) { return BadRequest("Id inválido."); }
            var response = new JoiaResponseDto
            {
                Id = joiaAtualizada.Id,
                Nome = joiaAtualizada.Nome,
                Descricao = joiaAtualizada.Descricao,
                Preco = joiaAtualizada.Preco,
                UrlImagem = joiaAtualizada.UrlImagem,
                Categoria = joiaAtualizada.Categoria
            };
            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeletarJoiaAsync(int id)
        {
            var joiaDeletada = await _repository.DeletarJoiaAsync(id);
            if(joiaDeletada == false) { return BadRequest("Id inválido."); }
            return NoContent();
        }
    }
}
