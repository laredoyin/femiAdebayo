import React, {Component} from 'react'
import WeddingImage from'../images/weddingimage.png'
import weddinginvitation from '../images/wedding-invitations.png'
import savetodateimage from '../images/save-the-date.png'
import foodmenu from'../images/weeding-food-drink-menu.png'
import weddingcard from '../images/wedding-thank-you-cards.png'
import BrandedPaperBags from'../images/wedding-paper-bags.png'
import BrandedCustomMugs from '../images/branded-wedding-mugs.png'
import BrandedRollupBarners from '../images/wedding-rollup-banner.png'
import customNotepads from '../images/wedding-branded-note-pads.png'
import BrandedMousePads from '../images/wedding-mouse-pads.png'
import Bannerimage from '../images/wedding-banners.png'
import '../css/tailwind.css'
class Wedding extends Component{
    render(){
        return(
          <div>
              <div>
                  <img src={WeddingImage} alt="wedding" className="w-full"/>
              </div>
              <div className="md:flex flex-wrap mt-8 mx-10">
              <div className="mr-8">
                      <img src={weddinginvitation} alt="invitation" />
                      <h1 className="text-2xl font-medium-focus">Premium Wedding Invitation.<br/>
                      <span className="text-3xl" style={{color:'#ec268f'}}><b>Starting at ₦250.00</b></span>
                      </h1>
                      <p>Create stunning wedding invitations for your special day and 
                          give everyone<br/> something to look forward to. 
                          Printed with shiny lux cards with raised name print<br/> option.
                     </p>
                     <div className="mt-3">
              <button className="border  h-10 rounded mb-5" style={{ backgroundColor: 'green', color: 'white',width:'8rem' }}>
                <span><b>Order Now</b></span>
              </button>
            </div>
            </div>
            <div >
                      <img src={savetodateimage} alt="invitation" />
                      <h1 className="text-2xl font-medium-focus">Save The Date.<br/>
                      <span className="text-3xl" style={{color:'#ec268f'}}><b>Starting at ₦150.00</b></span>
                      </h1>
                      <p>Announce your special day with our beautiful A6 Save The Date cards. Available in <br/>
                      laminated matte cards and shiny lux cards.
                     </p>
                     <div className="mt-3">
              <button className="border  h-10 rounded mb-5" style={{ backgroundColor: 'green', color: 'white',width:'8rem' }}>
                <span><b>Order Now</b></span>
              </button>
            </div>
                  </div>
                  <div className="mr-8">
                      <img src={foodmenu} alt="invitation" />
                      <h1 className="text-2xl font-medium-focus">Food Menus<br/>
                      <span className="text-3xl" style={{color:'#ec268f'}}><b>Starting at ₦250.00</b></span>
                      </h1>
                      <p>Your food menu is another avenue to make your guests remember your day. Create <br/>
                      classy food menus that will wow your guests. 
                      Available in matte<br/> cards and shiny lux cards options.
                     </p>
                     <div className="mt-3">
              <button className="border  h-10 rounded mb-5" style={{ backgroundColor: 'green', color: 'white',width:'8rem' }}>
                <span><b>Order Now</b></span>
              </button>
            </div>
                  </div>
                  <div>
                      <img src={weddingcard} alt="invitation" />
                      <h1 className="text-2xl font-medium-focus">Thank You Cards.<br/>
                      <span className="text-3xl" style={{color:'#ec268f'}}><b>Starting at ₦200.00</b></span>
                      </h1>
                      <p>A message of appreciation to everyone that made your day special will go a lng way.,<br/> 
                      Order brilliantly designed thank you cards for your guests. Available in matte and , <br/>
                      shiny lux cards options.
                     </p>
                     <div className="mt-3">
              <button className="border  h-10 rounded mb-5" style={{ backgroundColor: 'green', color: 'white',width:'8rem' }}>
                <span><b>Order Now</b></span>
              </button>
            </div>
                  </div>
                  <div className="mr-8">
                      <img src={BrandedPaperBags} alt="invitation" />
                      <h1 className="text-2xl font-medium-focus">Branded Paper Bags<br/>
                      <span className="text-3xl" style={{color:'#ec268f'}}><b>Starting at ₦399.00</b></span>
                      </h1>
                      <p>Order beautiful branded paper bags for gifts and souvenirs. 
                          Give your guests<br/> something awesome to carry around from your special day. 
                          Available in various<br/>
                           sizes and dimensions.
                     </p>
                     <div className="mt-3">
              <button className="border  h-10 rounded mb-5" style={{ backgroundColor: 'green', color: 'white',width:'8rem' }}>
                <span><b>Order Now</b></span>
              </button>
            </div>
            </div>
                  <div>
                      <img src={BrandedCustomMugs} alt="invitation" />
                      <h1 className="text-2xl font-medium-focus">Branded Custom Mugs<br/>
                      <span className="text-3xl" style={{color:'#ec268f'}}><b>Starting at ₦1,199.00</b></span>
                      </h1>
                      <p>Create beautifully printed ceramic mugs as your gifts for your guests. 
                          Available as<br/> simple mugs and magic mug options.
                     </p>
                     <div className="mt-3">
              <button className="border  h-10 rounded mb-5" style={{ backgroundColor: 'green', color: 'white',width:'8rem' }}>
                <span><b>Order Now</b></span>
              </button>
            </div>
                  </div>
                  <div className="mr-8">
                      <img src={BrandedRollupBarners} alt="invitation" />
                      <h1 className="text-2xl font-medium-focus">Branded Rollup Banners<br/>
                      <span className="text-3xl" style={{color:'#ec268f'}}><b>Starting at ₦17,999.00</b></span>
                      </h1>
                      <p>Beautify your wedding venue with classy branded rollup banners and make your <br/>
                      event memorable. Available in small and big base options.
                     </p>
                     <div className="mt-3">
              <button className="border  h-10 rounded mb-5" style={{ backgroundColor: 'green', color: 'white',width:'8rem' }}>
                <span><b>Order Now</b></span>
              </button>
            </div>
                  </div>
                  <div>
                      <img src={customNotepads} alt="invitation" />
                      <h1 className="text-2xl font-medium-focus">Custom Notepads<br/>
                      <span className="text-3xl" style={{color:'#ec268f'}}><b>Starting at ₦399.00</b></span>
                      </h1>
                      <p>Give your weddiing guests an amazing gifts to take their notes and they will always<br/>
                       remember how special your day was.
                     </p>
                     <div className="mt-3">
              <button className="border  h-10 rounded mb-5" style={{ backgroundColor: 'green', color: 'white',width:'8rem' }}>
                <span><b>Order Now</b></span>
              </button>
            </div>
                  </div>
                  <div className="mr-8">
                      <img src={BrandedMousePads} alt="invitation" />
                      <h1 className="text-2xl font-medium-focus">Branded Mousepads<br/>
                      <span className="text-3xl" style={{color:'#ec268f'}}><b>Starting at ₦19,999.00</b></span>
                      </h1>
                      <p>Wedding guests deserve gifts and souvernirs they will remember as they use. Print<br/>
                       photo mousepads for your special and wow everyone.
                     </p>
                     <div className="mt-3">
              <button className="border  h-10 rounded mb-5" style={{ backgroundColor: 'green', color: 'white',width:'8rem' }}>
                <span><b>Order Now</b></span>
              </button>
            </div>
                  </div>
                  <div>
                      <img src={Bannerimage} alt="invitation" />
                      <h1 className="text-2xl font-medium-focus">Wedding 7" * 5" Banner <br/>
                      <span className="text-3xl" style={{color:'#ec268f'}}><b>Starting at ₦8,999.00</b></span>
                      </h1>
                      <p>Brand your wedding's hall entrance with awesome looking wedding banners with<br/>
                       your pictures and designs boldly printed on it.
                     </p>
                     <div className="mt-3">
              <button className="border  h-10 rounded mb-5" style={{ backgroundColor: 'green', color: 'white',width:'8rem' }}>
                <span><b>Order Now</b></span>
              </button>
            </div>
          </div>
           </div>
           <div class="  h-auto mt-5 px-10 py-2 mx-10 md:w-4/5 w-auto mb-5" style={{ border:'3px solid #ec268f'}}>
           <p className="text-lg"><b>Get your wedding invitations, paper bags, banners, souvenirs and gift items printed and 
            delivered to you anywhere you are in
           Lagos, Abuja, Port Harcourt.</b></p>
           </div>
          </div>
        )
    }
}
export default Wedding