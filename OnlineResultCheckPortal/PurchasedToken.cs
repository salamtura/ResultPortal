//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace OnlineResultCheckPortal
{
    using System;
    using System.Collections.Generic;
    
    public partial class PurchasedToken
    {
        public int ID { get; set; }
        public Nullable<int> JSCEID { get; set; }
        public Nullable<int> TokenID { get; set; }
        public Nullable<bool> IsValid { get; set; }
        public Nullable<System.DateTime> PurchaseDate { get; set; }
        public string PaymentMethod { get; set; }
        public string CreditCardNumber { get; set; }
        public Nullable<short> Status { get; set; }
        public string NameOnCard { get; set; }
        public string Cardnumber { get; set; }
        public string ExpiryDate { get; set; }
        public string CVV { get; set; }
        public string Cardtype { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> CreatedBy { get; set; }
    }
}
