using Microsoft.EntityFrameworkCore;
using Produtos_API.Data;
using Produtos_API.Models;

namespace Produtos_API.Repositories
{
    public class JoiaRepository : IJoiaRepository
    {
        private readonly AppDbContext _context;
        public JoiaRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Joia?> ObterPorIdAsync(int id)
        {
            var joia = await _context.Joias.AsNoTracking().FirstOrDefaultAsync(j => j.Id == id);
            return joia;
        }

        public async Task<IEnumerable<Joia>> ObterTodosAsync()
        {
            var joias = await _context.Joias.ToListAsync();
            return joias;
        }

        public async Task<Joia> CriarJoiaAsync(Joia joia)
        {
            _context.Joias.Add(joia);
            await _context.SaveChangesAsync();
            return joia;
        }

        public async Task<Joia> AtualizarJoiaAsync(Joia joia)
        {
            var encontrouJoia = await ObterPorIdAsync(joia.Id);
            if (encontrouJoia == null) { return null; }
            _context.Update(joia);
            await _context.SaveChangesAsync();
            return joia;
        }

        public async Task<bool> DeletarJoiaAsync(int id)
        {
            var encontrouJoia = await ObterPorIdAsync(id);
            if(encontrouJoia == null) { return false; }
            _context.Remove(encontrouJoia);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
