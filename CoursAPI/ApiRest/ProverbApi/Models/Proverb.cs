using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProverbApi.Models
{
    public class Proverb
    {
        private int id;
        private string saying;
        private string author;
        private string language;

        public int Id { get => id; set => id = value; }
        public string Saying { get => saying; set => saying = value; }
        public string Author { get => author; set => author = value; }
        public string Language { get => language; set => language = value; }
    }
}
