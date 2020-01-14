import React, { Component } from 'react';
 import '../css/tailwind.css'
import Business from '../images/businesscard.png'
import Onesided from '../images/onesided.png'
import Twosided from '../images/twosided.png'
import threesided from '../images/threesided.png'
import Fouthsided from '../images/fouthsided.png'
import fifthsided from '../images/fifthsided.png'
import Customer1 from '../images/customer1.png'
import Customer3 from '../images/customer3.png'
import Tip1 from '../images/tips1.png'
import Tip2 from '../images/tips2.png'
import Tip3 from '../images/tips3.png'
class BusinessCard extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={Business} alt='business' className="w-full h-auto " />
        </div>
        <h1 className="text-center mt-5 md:text-4xl" style={{ color: '#01b0f0' }}><b>Choose Product</b></h1>
        <div className="md:flex mx-20">
          <div className="border mt-10 mb-2 mr-20" style={{ width: '20rem', height: '46rem' }}>
            <img src={Onesided} alt='onesided' className=":w-11\/12" />
            <h1 className="text-center md:text-2xl mt-2 text-lg">One-Sided Business Cards</h1>
            <p className="text-center text-sm mt-1">Order one sided business cards that simply<br />
             represent your business in special ways. Order<br /> with our free templates, upload your own designs<br />
             or have a team design your business cards at a <br />friendly fee.
            </p>
            <div className="my-2 mx-4 text-center">
              <p><b>Material</b>- 300 gsm matte card paper stock with 600 gsm options.</p>
            <br />
            <p><b>Finishing</b> - Matte Lamination with round corner options</p>
            <br/>
             <p> <b>Delivery</b> - 3 - 5 working days for Lagos, 5 - 7 working days for other cities</p>
           </div>
            <p className="font-bold text-center">Starting at <span className="line-through font-bold">₦5,500.00</span>,
           <br/>
              <span style={{ color: '#ec268f' }}>₦3,500.00</span>
            </p>
            <div className="flex justify-center mt-3">
              <button className="border w-3/5 h-10 rounded mb-5" style={{ backgroundColor: '#ec268f', color: 'white' }}>
                <span>Order Now</span>
              </button>
            </div>
            <a href="/" className="text-center " style={{ marginLeft: '7rem' }}>View Prices</a>
          </div>
          <div className="border mt-10 mb-2 mr-20" style={{ width: '20rem', height: '46rem' }}>
            <img src={Twosided} alt='onesided' className=":w-11\/12" />
            <h1 className="text-center md:text-2xl mt-2">Two-sided Business Cards</h1>
            <p className="text-center text-sm mt-1">Order premium double-sided business cards and<br />
              start presenting your business in awesome ways.<br />
              Customise one of our templates, upload your own<br /> pre-designed files or have our in-house designers<br />
              create something awesome for you.</p>
            <div className="my-2 mx-4 text-center">
              <p><b>Material</b> - 300 gsm matte card paper stock with 600 gsm options</p>
            <br/>
            <p> <b>Finishing</b> - Matte Lamination with round corner options</p>
            <br/>
            <p> <b>Delivery</b> - 3 - 5 working days for Lagos, 5 - 7 working days for other cities</p>
           </div>
            <div className="font-bold text-center">
             <p> Starting at <span className="line-through font-bold">₦6,999.00</span></p>
              <br />
              <span style={{ color: '#ec268f' }}>₦4,999.00</span>
            </div>
            <div className="flex justify-center mt-3">
              <button className="border w-3/5 h-10 rounded mb-5" style={{ backgroundColor: '#ec268f', color: 'white' }}>
                <span>Order Now</span>
              </button>
            </div>
            <a href="/" className="text-center " style={{ marginLeft: '7rem' }}>View Prices</a>
          </div>
          <div className="border mt-10 mb-2 mr-20" style={{ width: '20rem', height: '48rem' }}>
            <img src={threesided} alt='onesided' className=":w-11\/12" />
            <h1 className="text-center md:text-2xl mt-2">Square Business Cards (1 sided)</h1>
            <p className="text-center text-sm mt-1">Square it up, because everyone is going<br/>
             rectangular. Create unique square-shaped <br />business cards and wow everyone. Choose from<br/>
              our free designs, upload your own or have our<br/> 
              design team help you fix something beautiful.
            </p>
            <div className="my-2 mx-4 text-center">
              <p><b>Material</b> - 300 gsm matte card paper stock with 600 gsm options</p>
            <br/>
            <p><b>Finishing</b> - Matte Lamination with round corner options</p>
            <br/>
            <p><b>Delivery</b> - 3 - 5 working days for Lagos, 5 - 7 working days for other cities</p>
            </div>
            <div className="font-bold text-center">
            <p> Starting at <span className="line-through font-bold">₦5,000.00.</span></p>
              <br />
              <span style={{ color: '#ec268f' }}>₦3,000.00</span>
            </div>
            <div className="flex justify-center mt-3">
              <button className="border w-3/5 h-10 rounded mb-5" style={{ backgroundColor: '#ec268f', color: 'white' }}>
                <span>Order Now</span>
              </button>
            </div>
            <a href="/" className="text-center " style={{ marginLeft: '7rem' }}>View Prices</a>
          </div>
        </div>
        <div className="md:flex mx-20">
          <div className="border mt-10 mb-2 mr-20" style={{ width: '20rem', height: '51rem' }}>
            <img src={Fouthsided} alt='onesided' className=":w-11\/12" />
            <h1 className="text-center md:text-2xl mt-2">Square Business Cards (2 sided)</h1>
            <p className="text-center text-sm mt-1">Be different, create full colour square business <br/>
            cards with rounded corner options. Choose and<br/> 
            customize one of our 1000S of free templates or<br/> 
            upload your own designs. You can also have a<br/> 
            design team come up with something <br />awesome for you.</p>
            <div className="my-2 mx-4 text-center">
              <p><b>Material</b> - 300 gsm matte card paper stock with 600 gsm options</p>
           <br/>
           <h1><b>Finishing</b> - Matte Lamination with round corner options</h1>
           <br/>
           <p><b>Delivery</b> - 3 - 5 working days for Lagos, 5 - 7 working days for other cities</p>
              </div>
            <div className="font-bold text-center">
              <p>Starting at <span className="line-through font-bold">₦6,999.00</span></p>
           <br/>
              <span style={{ color: '#ec268f' }}>₦4,999.00</span>
            </div>
            <div className="flex justify-center mt-3">
              <button className="border w-3/5 h-10 rounded mb-5" style={{ backgroundColor: '#ec268f', color: 'white' }}>
                <span>Order Now</span>
              </button>
            </div>
            <a href="/" className="text-center " style={{ marginLeft: '7rem' }}>View Prices</a>
          </div>
          <div className="border mt-10 mb-2 mr-20" style={{ width: '20rem', height: '47rem' }}>
            <img src={fifthsided} alt='onesided' className=":w-11\/12" />
            <h1 className="text-center md:text-2xl mt-2">Mini Business Card</h1>
            <p className="text-center text-sm mt-1">Order full colour quality mini business cards that<br /> 
            simply represent your business in special ways.<br/> 
            Order with our free templates, upload your own<br/> 
            designs or have a team design your business cards<br/> 
            at a friendly fee.
            </p>
            <div className="my-2 mx-4 text-center">
              <p><b>Material</b> - 300 gsm matte card paper stock with 600 gsm options.</p>
            <br/>
            <p> <b>Finishing</b> - Matte Lamination with round corner options</p>
           <br/>
           <p><b>Delivery</b> - 3 - 5 working days for Lagos, 5 - 7 working days for other cities.</p>
           </div>
            <div className="font-bold text-center">
            <p>  Starting at <span className="line-through font-bold">₦5,000.00</span></p>
            <br/>
              <span style={{ color: '#ec268f' }}>₦3,000.00</span>
              </div>
            <div className="flex justify-center mt-3">
              <button className="border w-3/5 h-10 rounded mb-5" style={{ backgroundColor: '#ec268f', color: 'white' }}>
                <span>Order Now</span>
              </button>
            </div>
            < a href="/" className="text-center " style={{ marginLeft: '7rem' }}>View Prices</a>
          </div>
        </div>
        <div className=" mx-20  md:border  mt-10   rounded-lg mb-5 pb-5 h-auto" style={{ backgroundColor: '#dae1e7' }}>
          <div className="md:text-2xl text-center pt-5">
            <h1>What customers say.</h1>
          </div>
          <div className="md:flex">
            <div className="md:flex mr-5 ml-10 mt-10 mb-5">
              <div className="">
                <img src={Customer1} alt='cus2' classname=":w-4\/12 " style={{ height: '30%', borderRadius: '5rem' }} />
              </div>
              <div className="">
                <p>All our business cards  <span style={{ color: '#01b0f0' }}><b>@Hotelng</b></span> are<br/>
                 made by <span style={{ color: '#01b0f0' }}><b>@printivo</b>.</span> Really no easier<br/> 
                 way to print stuff. <span style={{ color: '#01b0f0' }}><b>@MarkEssien</b>
              </span>
              </p>
              </div>
            </div>
            <div className="md:flex  ml-10 mr-10 mt-10 mb-5">
              <div>
                <img src={Customer1} alt='cus1' classname=":w-4\/12 " style={{ height: '30%', borderRadius: '5rem' }} />
              </div>
              <div className="mr-10">
                <p><span style={{ color: '#01b0f0' }}><b>@Printivo</b></span> got an order delivered in 2<br/> 
                days!!!! Talk about excellence! Lovely
              <br/> to see Nigerian businesses deliver on 
              <br/>their brand promise. <span style={{ color: '#01b0f0' }}><b>@MonsieurUwem</b></span>
              </p>
              </div>
            </div>
            <div className="md:flex mr-10 ml-10  mt-10 mb-5">
              <div>
                <img src={Customer3} alt='cus3' classname=":w-4\/12 " style={{ height: '30%', borderRadius: '5rem' }} />
              </div>
              <div className="">
                <p>
                <span style={{ color: '#01b0f0' }}>
                <b>@Printivo</b></span> delivered just in time.<br/> Thank you so much for the great<br/>
                 service <span style={{ color: '#01b0f0' }}><b>@abbybells</b></span>
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="md:text-2xl text-center" style={{ color: '#01b0f0' }}>
            <h1><b>Tips and ideas from our blog</b></h1>
            </div>
        </div>
        <div className="md:flex ml-20 my-10 ">
          <div className="mr-5 mb-10">
            <img src={Tip1} alt='tip1' />
            <h1 className="md:text-1xl mt-2"><b>Seven Ways to Make <br/>Your Business Card Your Best Marketing Tool</b></h1>
            <p className="mt-2">Every day we hand out a tiny brochure about our <br/>
            businesses without even realizing it. Look at the stacks<br/>
            on your desk, the deck in your drawer or the stash in<br /> your wallet. Business cards, in all sizes, shapes and <br/>
            colors, are everywhere. And yet, while we ll understand... <br /><a href="/" style={{ color: '#ec268f' }}>Read More</a>
            </p>
          </div>
          <div className="mr-8 mb-10">
            <img src={Tip2} alt='tip1' />
            <h1 className="md:text-1xl mt-2"><b>Take These Seven Business Cards Tips<br /> Seriously</b></h1>
            <p className="mt-2">A simple business card will beat anyone, simplicity they<br /> say, is the ultimate sophistication. Creating a business<br /> card that is simple, unique and void of unnecessary<br /> graphic elements will make your business look classy<br /> and will be taken seriously... <br /><a href="/" style={{ color: '#ec268f' }}>Read More</a></p>
          </div>
          <div className="ml-1 mb-10">
            <img src={Tip3} alt='tip1' />
            <h1 className="md:text-1xl mt-2"><b>Five Reasons You Should Print Business<br /> Cards For Your Employees.</b></h1>
            <p className="mt-2">  Let’s start by saying this, the business card is not a <br />piece of paper reserved for key players in an<br /> organisation. It is a communication material that will <br />help to move your business forward, build your brand<br /> and bring in new business. A business card ... <br /><a href="/" style={{ color: '#ec268f' }}>Read More</a></p>
          </div>
        </div>
      </div>
    )
  }
}
export default BusinessCard;