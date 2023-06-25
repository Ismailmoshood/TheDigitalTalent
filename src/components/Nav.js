

export default function Nav(){
   return(
      <nav>
         <div class="logo">
            <img src="/assets/images/Group 1.png" alt='logo'/>
            <h3>THE DIGITAL TALENT</h3>
         </div>
         <a href='#section1'>Home</a>
         <a href='#section1'>Users</a>
         <a href='#section1'>Jobs</a>
         <a href='#section1'>Story</a>
         <a href='#section1'>Contact Us</a>
         <img src='/assets/images/Frame 6.png' alt='' style={{height: 58}} />
         <div>
         <a href='#section1' className='flex'><img src='/assets/images/tabler-icon-category.png' alt='' style={{height: 26, width: 26}} />Categories</a>
         </div>
         <a href='#section1'><img src='/assets/images/search.png' alt='' style={{height: 19, width: 19}}/></a>
         <a href='#section1'>sign up</a>
         <a href='#section1'><button>Join</button></a>
      </nav>
   )
}