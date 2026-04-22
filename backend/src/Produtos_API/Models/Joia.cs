using System.ComponentModel.DataAnnotations;

namespace Produtos_API.Models
{
    public class Joia
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public required string Nome { get; set; }

        [Required]
        public required string Descricao { get; set; }

        public decimal Preco { get; set; } = 0m;

        public string UrlImagem { get; set; } = "https://placehold.co/600x400?text=Sem+Foto";

        public bool IsAtivo { get; set; } = true;

        [Required]
        public required CategoriaJoia Categoria { get; set; }
    }
}
