using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.ViewModels
{
    public class UserViewModel
    {
        public string Id { get; set; }
        [Display(Name ="نام کاربری")]
        public string UserName { get; set; }
        [Display(Name="کلمه عبور")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [DataType(DataType.Password)]
        [Display(Name ="تکرار کلمه عبور")]
        public string ConfirmPassword { get; set; }
        [Display(Name="نام")]
        public string FirstName { get; set; }
        [Display(Name = "نام خانوادگی")]
        public string LastName { get; set; }
        [Display(Name ="آدرس پست الکترونیکی")]
        public string Email { get; set; }
        public List<SelectListItem> ApplicationRoles { get; set; }
        [Display(Name = "نوع دسترسی")]
        public string ApplicationRoleId { get; set; }
    }
}
