import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
   

  iconarray:Array<any>=[{
    
    icon:`<i class="fa-brands fa-facebook fa-2x"></i>`
  },

  {
    icon:`<i class="fa-brands fa-twitter fa-2x"></i>`
  },

  {
    icon:`<i class="fa-brands fa-google-plus-g fa-2x"></i> `
  },

  {
    icon:`<i class="fa-solid fa-p fa-2x"></i> `
  }
]




footerlink1:Array<any>=[
  {
    link:"javascript:;",
    icon:"Example"

  },

  
    {
      // link:"javascript:;",
      icon:"shope"
  
    },

    {
      // link:"javascript:;",
      icon:"Lincens"
  
    }
  
]





footerlink2:Array<any>=[
  {
    // link:"javascript:;",
    icon:"Contact"

  },

  
    {
      // link:"javascript:;",
      icon:"About"
  
    },

    {
      // link:"javascript:;",
      icon:"Privacy"
  
    },
    {
      // link:"javascript:;",
      icon:"Term"
  
    }
  
]






footerlink3:Array<any>=[
  {
    // link:"javascript:;",
    icon:"Download"

  },

  
    {
      // link:"javascript:;",
      icon:"Support"
  
    },

    {
      // link:"javascript:;",
      icon:"Document"
  
    }
  
]







footerlink4:Array<any>=[
  {
    // link:"javascript:;",
    icon:"Media"

  },

  
    {
      // link:"javascript:;",
      icon:"Blogs"
  
    },

    {
      // link:"javascript:;",
      icon:"Forms"
  
    }
  
]

footerlink=[this.footerlink1,this.footerlink2,this.footerlink3,this.footerlink4]


  constructor() { }

  ngOnInit(): void {
  }

}
