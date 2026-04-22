using Produtos_API.Models;

namespace Produtos_API.DTOs
{
    public class JoiaResponseDto
    {
        public int Id { get; init; }
        public string Nome { get; init; }
        public string Descricao { get; init; }
        public decimal? Preco { get; init; }
        public string UrlImagem { get; init; }
        public CategoriaJoia Categoria { get; init; }
    }
}
