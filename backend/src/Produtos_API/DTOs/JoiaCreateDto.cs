using Produtos_API.Models;
using System.ComponentModel.DataAnnotations;

namespace Produtos_API.DTOs
{
    public class JoiaCreateDto
    {
        [Required]
        public required string Nome { get; set; }

        [Required]
        public required string Descricao { get; set; }

        public decimal Preco { get; set; }

        public string UrlImagem { get; set; } = "https://placehold.co/600x400?text=Sem+Foto";

        public bool IsAtivo { get; set; } = true;

        [Required]
        public required CategoriaJoia Categoria { get; set; }
    }
}
