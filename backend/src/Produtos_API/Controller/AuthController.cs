using Microsoft.AspNetCore.Mvc;
using Produtos_API.DTOs;
using Produtos_API.Services;

namespace Produtos_API.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ITokenService _tokenService;
        private readonly IConfiguration _config;
        public AuthController(ITokenService tokenService, IConfiguration config)
        {
            _tokenService = tokenService;
            _config = config;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto loginDto)
        {
            var adminUser = _config["AdminSettings:Usuario"];
            var adminPass = _config["AdminSettings:Senha"];
            if (loginDto.Usuario == adminUser && loginDto.Senha == adminPass)
            {
                var token = _tokenService.GerarToken(loginDto.Usuario);
                return Ok(new
                {
                    token = token,
                    usuario = loginDto.Usuario
                });
            }
            return Unauthorized(new { message = "Usuário ou senha inválidos" });
        }
    };
}
