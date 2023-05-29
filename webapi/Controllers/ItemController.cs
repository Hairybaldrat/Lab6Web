using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Models;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/Items")]
    public class ItemController : ControllerBase
    {

        private readonly AppDbContext dbContext; 

        public ItemController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Item>>> GetAllItems()
        {
            return await dbContext.Items.ToListAsync();
        }
    }
}
