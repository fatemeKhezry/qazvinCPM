using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Requests
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage ="نام کاربری خود را وارد کنید")]
        public string UserName { get; set; }
        [Required(ErrorMessage ="کلمه عبور خود را وارد کنید")]
        [DataType(DataType.Password )]
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        [Required(ErrorMessage ="آدرس پست الکترونیکی خود را وارد کنید")]
        [DataType(DataType.EmailAddress , ErrorMessage ="آدرس پستی نامعتبر است")]
        public string Email { get; set; }
    }
}
