import Image from 'next/image';


const Footer = () => {
 return (
   <footer className="bg-gray-100 mt-14">
     <div className="bg-black text-white flex flex-col md:flex-row items-center py-12 px-6 text-center md:px-20 rounded-2xl mx-auto max-w-7xl ">
     <h2 className="text-2xl md:text-4xl font-bold uppercase mb-6 md:mb-0 md:w-1/2 text-center md:text-left">
     Stay Up to Date About <br/> Our Latest Offers
       </h2>
       <div className="w-full md:w-1/2">
         <div className="flex flex-col space-y-4">
           <input
             type="email"
             placeholder="Enter your email address"
             className="w-full px-4 py-3 rounded-lg text-black"
           />
           <button className="bg-white text-black px-4 py-3 rounded-lg font-semibold w-full hover:bg-slate-400">
             Subscribe to Newsletter
           </button>
         </div>
       </div>
     </div>

     <div className="py-12 px-6 md:px-20 text-gray-600 max-w-7xl mx-auto">
       <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
         <div className="col-span-2 md:col-span-1">
           <h3 className="text-xl font-bold mb-4 text-black">SHOP.CO</h3>
           <p>
             We have clothes that suit your style and which you re proud to wear. From women to men.
           </p>
           <div className="flex space-x-4 mt-4">

           <Image src="/pictures/Social.png" alt ="Social IDs" width={148} height={28}/>

           </div>
         </div>

         <div>
           <h4 className="text-lg font-bold mb-4 text-black">Company</h4>
           <ul className="space-y-2">
             <li>About</li>
             <li>Features</li>
             <li>Works</li>
             <li>Careers</li>
           </ul>
         </div>

         <div>
           <h4 className="text-lg font-bold mb-4 text-black">Help</h4>
           <ul className="space-y-2">
             <li>Customer Support</li>
             <li>Delivery Details</li>
             <li>Terms & Conditions</li>
             <li>Privacy Policy</li>
           </ul>
         </div>

         <div>
           <h4 className="text-lg font-bold mb-4 text-black">FAQ</h4>
           <ul className="space-y-2">
             <li>Account</li>
             <li>Manage Deliveries</li>
             <li>Order History</li>
             <li>Payments</li>
           </ul>
         </div>

         <div>
           <h4 className="text-lg font-bold mb-4 text-black">Resources</h4>
           <ul className="space-y-2">
             <li>Free Ebooks</li>
             <li>Development Tutorials</li>
             <li>How to-Blog</li>
             <li>Youtube Playlist</li>
           </ul>
         </div>
       </div>
     </div>

     <div className="bg-gray-100 py-6 border-t border-gray-300">
       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 px-6">
         <p className="text-gray-500 text-center md:text-left">
           Shop.co © 2000-2023. All Rights Reserved.
         </p>
         <div className="flex items-center space-x-4">

            <Image src="/pictures/cards.png" alt ="Cards" width={281.07} height={30.03}/>

         </div>
       </div>
     </div>
   </footer>
 );
};

export default Footer;