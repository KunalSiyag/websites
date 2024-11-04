import React from 'react'
import indiaMap from '../../assets/indian_map.png'
import indiaMap3 from '../../assets/india_map3.png'
import quotation from '../../assets/quotation.png'
import missionImg from '../../assets/mission.jpg'
import visionImg from '../../assets/vision.jpg'
import '../../assets/assets.css'
import './LandingPage.css'
import './MissionVision.css'
const review = () => {
  return (
    <>
    <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container">
            <img class="mainImg" src={missionImg} />
            <div class="allText aboveText">
                <p class="text-blk headingText">
                    Our Mission
                </p><br/>
                <p class="text-blk subHeadingText">
                  Secure meaningful employment opportunities
                </p>
                <p class="text-blk description">
                  To empower individuals from marginalized communities by providing them with a platform to showcase their skills and secure meaningful employment opportunities, thereby fostering social and economic inclusion.
                </p>
            </div>
        </div>
        <div class="responsive-container-block Container bottomContainer">
            <img class="mainImg" src={visionImg} alt="Image description"/>
            <div class="allText bottomText">
                <p class="text-blk headingText">
                    Our Vision
                </p>
                <p class="text-blk subHeadingText">
                  Contribute to a stronger and more equitable economy
                </p><br/>
                <p class="text-blk description">
                  To create a world where every individual, regardless of their background, has the opportunity to contribute their talents and realize their full potential through equitable employment.
                </p>
            </div>
        </div>
    </div>

    <div data-scroll data-scroll-speed="0.2" className='w-full flex relative min-h-screen flex-col items-end gap-10 mb-10 px-20 pt-20 text-right'>
        <div className="left w-[100vh] absolute left-56 -top-2">
            <div className="indiaImg relative ">
                <img className="w-800px h-full z-[-1]" src={indiaMap3}></img>
            </div>
        </div>
        <div className="z-10">
        <h1 className='text-[75px] leading-none font-bold'> Reaching the ones <br/> in need</h1>
          <h3 className='text-[35px] text-gray-800 mb-2'>5 lakhs + unprivileged reached</h3>
          <p className='text-right text-xl mt-10 font-thin'> India has over 15 million freelancers, making it <br/>the second-largest
            freelancing market after the <br/>U.S. This number continues to grow due
            to <br/>increasing internet access and digital platforms.</p>
        </div>
        {/* <div className="review flex gap-10">
            <div className="card flex flex-col  gap-10 w-[16vw] bg-amber-100 h-[17vw] px-10 pt-10  text-left rounded-2xl">
                <span>
                <svg  className='w-[5vw] h-[5vw]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="orange" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179"/></svg>
                <p className='text-xl font-semibold text-gray-500'>Headspace gives me a slice of the day that's just for me</p>
                </span>
                <h5 className='text-[0.5vw] opacity-65 font-semibold'>Nadien,New Mexico <br/> on priortizing self-care</h5>
            </div>
            <div className="card flex flex-col  gap-10 w-[16vw] bg-amber-100 h-[17vw] px-10 pt-10  text-left rounded-2xl">
                <span>
                <svg  className='w-[5vw] h-[5vw]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="orange" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179"/></svg>
                <p className='text-xl font-semibold text-gray-500'>Headspace gives me a slice of the day that's just for me</p>
                </span>
                <h5 className='text-[0.5vw] opacity-65 font-semibold'>Nadien,New Mexico <br/> on priortizing self-care</h5>
            </div>
            <div className="card flex flex-col  gap-10 w-[16vw] bg-amber-100 h-[17vw] px-10 pt-10  text-left rounded-2xl">
                <span>
                <svg  className='w-[5vw] h-[5vw]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="orange" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179"/></svg>
                <p className='text-xl font-semibold text-gray-500'>Headspace gives me a slice of the day that's just for me</p>
                </span>
                <h5 className='text-[0.5vw] opacity-65 font-semibold'>Nadien,New Mexico <br/> on priortizing self-care</h5>
            </div> */}
        <div className="testimonies">
    
            <div className="testimony">
                <img src={quotation} className="w-[75px]"></img>
                <h1>H4C helped me find more work opportunities.</h1>
                <div className="leading-10">
                <p>Vijay Kumar</p>
                <p className='text-xs leading-3'>Construction Worker, Delhi</p>
                </div>
            </div>
            <div className="testimony">
                <img src={quotation} className="w-[75px]"></img>
                <h1>Headgame go crazy</h1>
                <div className="leading-10">
                <p>Harshaditya Sharma</p>
                <p className='text-xs leading-3'>Domestic Help, Chennai</p>
                </div>
            </div>
            <div className="testimony">
                <img src={quotation} className="w-[75px]"></img>
                <h1>Got success in freelancing through H4C</h1>
                <div className="leading-10">
                <p>Dinesh Wani</p>
                <p className='text-xs leading-3'>Tailor, Maharashtra
</p>
                </div>
            </div>
            <div className="testimony">
                <img src={quotation} className="w-[75px]"></img>
                <h1>Freelance jobs came easily through H4C.</h1>
                <div className="leading-10">
                <p>Rajesh Negi</p>
                <p className='text-xs leading-3'>Electrician, Uttarakhand</p>
                </div>
            </div>
            <div className="testimony">
                <img src={quotation} className="w-[75px]"></img>
                <h1>Jobs were easy to get through H4C.</h1>
                <div className="leading-10">
                <p>Joshua S Raju</p>
                <p className='text-xs leading-3'>Depressed Student from VIT, Tamil Nadu</p>
                </div>
            </div>
            <div className="testimony">
                <img src={quotation} className="w-[75px]"></img>
                <h1>Got success in freelancing through H4C.</h1>
                <div className="leading-10">
                <p>Radhike Desai</p>
                <p className='text-xs leading-3'>Domestic help, Gujarat</p>
                </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default review