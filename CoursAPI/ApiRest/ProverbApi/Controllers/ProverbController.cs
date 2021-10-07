using Microsoft.AspNetCore.Mvc;
using ProverbApi.Models;
using ProverbApi.Tools;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProverbApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProverbController : ControllerBase
    {
        private DataDbContext data;

        public ProverbController(DataDbContext _data)
        {
            data = _data;
        }

        // GET: api/<ProverbController>
        [HttpGet]
        public ActionResult Get()
        {
            return Ok("Unauthorize Access : The Api's access is ../api/proverb/list");
        }

        // GET: api/Proverb/list
        [HttpGet("list")]
        public ActionResult Getlist()
        {
            return Ok(data.Proverbs.ToList());
        }

        // GET api/Proverb/5        
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            return Ok(data.Proverbs.Find(id));
        }

        // POST api/<ProverbController>
        [HttpPost]
        public ActionResult Post([FromBody] Proverb p)
        {
            data.Proverbs.Add(p);
            if (data.SaveChanges() >=0)
            {
                return Ok(new { message = "Proverb Added", error = false, proverbId = p.Id });
            }
            else
            {
                return Ok(new { message = "Error server", error = true });
            }
        }

        // PUT api/proverb/51
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Proverb p)
        {
            Proverb proverb = data.Proverbs.Find(id);

            if (proverb != null)
            {
                proverb.Saying = p.Saying != null ? p.Saying : proverb.Saying;
                proverb.Author = p.Author != null ? p.Author : proverb.Author;
                proverb.Language = p.Language != null ? p.Language : proverb.Language;

                if (data.SaveChanges() >= 0)
                {
                    return Ok(new { message = "Proverb Modified", error = false, proverbId = id });
                }
                else
                {
                    return Ok(new { message = "Error Server", error = true });
                }
            }
            else
            {
                return NotFound();
            }
        }

        // DELETE api/proverb/51
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            Proverb proverb = data.Proverbs.Find(id);

            if (proverb != null)
            {
                data.Proverbs.Remove(proverb);

                if (data.SaveChanges() >= 0)
                {
                    return Ok(new { message = "Proverb Deleted", error = false });
                }
                else
                {
                    return Ok(new { message = "Error Server", error = true });
                }
            }
            else
            {
                return NotFound();
            }
        }
    }
}
