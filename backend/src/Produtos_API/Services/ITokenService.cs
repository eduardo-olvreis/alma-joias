namespace Produtos_API.Services
{
    public interface ITokenService
    {
        string GerarToken(string usuario);
    }
}
