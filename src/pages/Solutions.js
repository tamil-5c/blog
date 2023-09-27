import React from 'react'
import { Link, graphql } from 'gatsby'


function Solutions({ data }) {
  const strapiContent = data.allStrapiSolution.nodes[0];

  return (
    <div className=' bg-black Homepage'>
      <div className='absolute w-full max-w-full flex flex-col items-center bg-transparent' style={{ zIndex: '2', color: 'rgba(255, 255, 255, 0)', top: '0' }}>
        <div className='w-full max-w-full pt-3 pb-3 ml-auto mr-auto' style={{ width: '79%' }}>
          <nav className=' w-full max-w-full justify-around items-center flex relative float-right font-use nav-md'>
            <Link to='/Solutions' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Solutions</Link>
            <Link to='/Technology' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Technology</Link>
            <Link to='/Partners' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Partners</Link>
            <Link to='/' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Prodigi</Link>
            <Link to='/About' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>about</Link>
            <Link to='/Carrers' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Carrers</Link>
            <div className='DropdDown'>
              <div className='DropDowntoggle'>
                <div className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Resources</div>
              </div>
              <nav className='navbartoggle'>
                <Link to='/Blogs' className='navlinks'>Blogs</Link>
                <Link to='/Newsroom' className='navlinks'>Newsroom</Link>
              </nav>
            </div>
            <Link to='/Contact' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Contact</Link>
          </nav>
        </div>
      </div>
      <div className=' h-screen justify-start flex flex-col items-center bg-no-repeat' style={{ backgroundPosition: '95% 100%', backgroundSize: '55%', backgroundImage: `url(${strapiContent.solutionHomepage.localFile.url})`, marginBottom: '125px' }}>

        <div className=' max-w-full ml-auto mr-auto'>
          <div className='max-w-full relative' style={{ width: '1200px', marginTop: '234px' }}>
            <h1 className=' max-w-full uppercase mt-0 mb-0 font-normal font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '80px', lineHeight: '100px' }}>{strapiContent.title}</h1>
            <div className='max-w-full mt-8' style={{ width: '500px', marginLeft: '100px' }}>
              <p className='mb-0 mt-0 font-use-one text-xl' style={{ color: 'rgba(255, 255, 255, .85)' }}>{strapiContent.content.data.content}</p>
            </div>
            <div className='relative flex w-full max-w-full justify-around  solutions-home-container'>
              {strapiContent.menuItems.map(({ items }) => (
                <Link to="#" className=' font-medium uppercase text-lg  font-use' style={{ color: '#fff', transition: 'all .25s ease-in', letterSpacing: '2px', lineHeight: '21px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>{items}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* footer section */}
      <div className='footer section'>
        <div className='relative ml-auto mr-auto' style={{ maxWidth: '1200px' }}>
          <div className='flex justify-between items-start pb-0 pl-4 pr-4 mb-8' style={{ marginTop: '101px', border: '1px #7c4c4c', borderBottomColor: 'rgba(255, 255, 255, .5)' }}>
            <div className='flex flex-col items-start'>
              <div className='uppercase font-semibold font-use' style={{ color: 'rgba(255, 255, 255, .85) ', lineHeight: '48px', fontSize: '40px' }}>{strapiContent.footerlefttitle}</div>
              <p className=' text-xl leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', width: '441px', marginTop: '30px', marginBottom: '30px' }}>{strapiContent.footercontent.data.footercontent}</p>
              {/* getintouchbutton */}
              <button class="btn btn-2 hover-slide-up">
                <span>{strapiContent.git}</span>
              </button>
              <div className='social-platform font-use'>
                <Link to="https://www.facebook.com/5cnetwork" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                  <img src={strapiContent.facebook.localFile.url} alt='facebook' className='mr-0 max-w-full inline-block align-middle'></img>
                </Link>
                <Link to="https://www.linkedin.com/company/5c-network?trk=top_nav_home" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                  <img src={strapiContent.linkedin.localFile.url} alt='Linkedin' className='mr-0 max-w-full inline-block align-middle'></img>
                </Link>
                <Link to="https://twitter.com/5c_network" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                  <img src={strapiContent.twitter.localFile.url} alt='Twitter' className='mr-0 max-w-full inline-block align-middle'></img>
                </Link>
                <Link to="https://medium.com/pixxel-labs" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                  <img src={strapiContent.medium.localFile.url} alt='Medium' className='mr-0 max-w-full inline-block align-middle'></img>
                </Link>
              </div>
            </div>
            <div className='flex'>
              <div className='flex flex-col font-use' style={{ marginLeft: '60px' }}>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>about</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>solutions</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Technology</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>media</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>blogs</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>newsroom</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Annual returns</Link>
              </div>
              <div className='flex flex-col font-use' style={{ marginLeft: '60px' }}>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>vision</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>carrers</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>contact</Link>
                <Link to="#" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>privacy policy</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex flex-row items-end mt-0 overflow-hidden' style={{ color: '#fff', height: '400px' }}>
          <video autoPlay loop muted className=' w-full h-full absolute m-auto object-cover bg-cover inline-block align-baseline ' style={{ backgroundPosition: '50%', top: '-100%', bottom: '-100%', left: '-100%', right: '-100%' }}>
            <source src={strapiContent.footervideo.localFile.url} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Solutions

export const pageQuery = graphql`
query MyQuery {
  allStrapiSolution {
    nodes {
      title
      content {
        data {
          content
        }
      }
      menuItems {
        items
      }
      footerlefttitle
      footercontent {
        data {
          footercontent
        }
      }
      facebook {
        localFile {
          url
        }
      }
      twitter {
        localFile {
          url
        }
      }
      linkedin {
        localFile {
          url
        }
      }
      medium {
        localFile {
          url
        }
      }
      footervideo {
        localFile {
          url
        }
      }
      solutionHomepage {
        localFile {
          url
        }
      }
      git
    }
  }
}

`
