const Product = require('../models/product');
const Enquiry=require('../models/enquiry');
exports.home=(req,res)=>{
   
     Product.find({},(err,docs)=>{
        if(err)
          {
              throw err;
              console.log(err);
          }
         else
             {
                 var cursor=docs;
                res.render('home',{Products:cursor});
             }
    });
    
};
exports.final=(req,res)=>{
    res.render('final');
};
exports.contact=(req,res)=>{
  res.render('contact');  
};
exports.login=(req,res)=>{
    res.render('login');
};
exports.register=(req,res)=>{
    res.render('register');
};
exports.panel=(req,res)=>{
   Product.find({},(err,docs)=>{
        if(err)
          {
              throw err;
              console.log(err);
          }
         else
             {
                 var cursor=docs;
                 res.render('panel',{Products:cursor});
             }
    });
   
};
exports.enquiries=(req,res)=>{
    Enquiry.find({},(err,docs)=>{
        if(err)
            {
                throw err;
                console.log(err);
            }
        else
            {
                var cursor=docs;
                res.render('panel-enquiries',{Enquiries:cursor})
            }
    });
};
exports.chicken=(req,res)=>{
    Product.find({category:"chicken"},(err,docs)=>{
        if(err)
          {
              throw err;
              console.log(err);
          }
         else
             {
                 var cursor=docs;
                 res.render('chicken-world',{Products:cursor});
             }
    });
};
exports.mutton=(req,res)=>{
     Product.find({category:"mutton"},(err,docs)=>{
        if(err)
          {
              throw err;
              console.log(err);
          }
         else
             {
                 var cursor=docs;
                 res.render('mutton-world',{Products:cursor});
             }
    });
};
exports.fish=(req,res)=>{
     Product.find({category:"fish"},(err,docs)=>{
        if(err)
          {
              throw err;
              console.log(err);
          }
         else
             {
                 var cursor=docs;
                 res.render('fish-world',{Products:cursor});
             }
    });
};
exports.litti=(req,res)=>{
     Product.find({category:"littichoka"},(err,docs)=>{
        if(err)
          {
              throw err;
              console.log(err);
          }
         else
             {
                 var cursor=docs;
                 res.render('litti-choka',{Products:cursor});
             }
    });
};
