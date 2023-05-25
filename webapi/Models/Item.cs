using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class Item
    {
        [Key]
        public int Itemid { get; set; }

        [Column(TypeName ="nvarchar(100)")]
        public string? Name { get; set; }

        public decimal Price { get; set; }
    }
}
