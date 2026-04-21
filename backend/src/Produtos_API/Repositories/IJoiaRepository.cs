using Produtos_API.Models;

namespace Produtos_API.Repositories
{
    public interface IJoiaRepository
    {
        Task<Joia?> ObterPorIdAsync(int id);
        Task<IEnumerable<Joia>> ObterTodosAsync();
        Task<Joia> CriarJoiaAsync(Joia joia);
        Task<Joia> AtualizarJoiaAsync(Joia joia);
        Task<bool> DeletarJoiaAsync(int id);
    }
}
