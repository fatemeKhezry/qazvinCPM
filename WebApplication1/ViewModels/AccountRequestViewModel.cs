using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.ViewModels
{
    public class AccountRequestViewModel
    {
        public string Id { get; set; }
        [Display(Name ="نام کاربری")]
        public string UserName { get; set; }
        [Display(Name ="کلمه عبور")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Display(Name ="تکرار کلمه عبور")]
        public string ConfirmPassword { get; set; }
        [Display(Name ="آدرس پست الکترونیکی")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Display(Name ="نام")]
        public string FirstName { get; set; }
        [Display(Name ="نام خانوادگی")]
        public string LastName { get; set; }
    }
}
