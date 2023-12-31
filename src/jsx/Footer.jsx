import React, { /* useState,  useEffect, useRef */ } from 'react';
import '../styles/styles.less';

function Footer() {
  return (
    <div className="app" id="app_footer">
      <div className="footer_container">
        <h2>What do you want to do next?</h2>
        <div className="footer_elements">
          <div className="footer_element footer_element_1">
            <div className="footer_content anchor_videos" id="anchor_videos">
              <h3>Watch the videos</h3>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://player.vimeo.com/video/870977951" title="Trade And Development Report" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
              </div>
              <ul>
                <li>
                  <a href="https://youtube.com/shorts/uhTWhGSjiAA" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="https://youtube.com/shorts/lzWPaD785Fw" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="https://youtube.com/shorts/apqVXoTse0M" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="https://youtube.com/shorts/hvBdU2wnHNo" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <div className="hidden">
                    <a href="https://youtu.be/00iFOntZxG0" target="_blank" rel="noreferrer">Русский</a>
                    {', '}
                  </div>
                  <a href="https://youtube.com/shorts/vcOg6-h0kEQ" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="https://youtube.com/shorts/q39vfOZ8MSI" target="_blank" rel="noreferrer">Kiswahili</a>
                  {', '}
                  <a href="https://youtube.com/shorts/cW4TQx-Gkxs" target="_blank" rel="noreferrer">Urdu اردو</a>
                </li>
              </ul>
              <h4>Download the report video</h4>
              <ul>
                <li>
                  <a href="https://vimeo.com/870977951" target="_blank" rel="noreferrer">English</a>
                  {', '}
                  <a href="https://vimeo.com/871034611" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="https://vimeo.com/871034730" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="https://vimeo.com/871034472" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="https://vimeo.com/871034516" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <div className="hidden">
                    <a href="https://vimeo.com/868447615" target="_blank" rel="noreferrer">Русский</a>
                    {', '}
                  </div>
                  <a href="https://vimeo.com/871034692" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="https://vimeo.com/871034658" target="_blank" rel="noreferrer">Kiswahili</a>
                  {', '}
                  <a href="https://vimeo.com/873046823" target="_blank" rel="noreferrer">Urdu اردو</a>
                </li>
              </ul>
              <h4>Press conference: UNCTAD Secretary-General Rebeca Grynspan outlines the key messages</h4>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://player.vimeo.com/video/871016982?h=e2e8033fa1" title="Press conference" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
              </div>
              <ul>
                <li>
                  <strong>Download:</strong>
                  {' '}
                  <a href="https://vimeo.com/871016982" target="_blank" rel="noreferrer">Video</a>
                </li>
              </ul>
              <h4>Interview with Richard Kozul-Wright, Director of UNCTAD’s Globalization and Development Strategies Division</h4>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://player.vimeo.com/video/870968586?h=1096fab3d9" title="Interview with Richard Kozul-Wright, Director of UNCTAD’s Globalization and Development Strategies Division" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
              </div>
              <ul>
                <li>
                  <strong>Download:</strong>
                  {' '}
                  <a href="https://vimeo.com/870968586" target="_blank" rel="noreferrer">Video</a>
                </li>
              </ul>
              <h4>Interview with Anastasia Nesvetailova, Head of UNCTAD’s Macroeconomic and Development Policies Branch</h4>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://player.vimeo.com/video/870968098?h=9f229e9a3a" title="Interview with Anastasia Nesvetailova, Head of UNCTAD’s Macroeconomic and Development Policies Branch" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
              </div>
              <ul>
                <li>
                  <strong>Download:</strong>
                  {' '}
                  <a href="https://vimeo.com/870968098" target="_blank" rel="noreferrer">Video</a>
                </li>
              </ul>
            </div>
            <div className="footer_content anchor_podcasts" id="anchor_podcasts">
              <h3>Podcasts</h3>
              <p>Listen to the Weekly Tradecast episodes that explore some of the main issues in the report</p>
              <div className="iframe_container">
                <iframe title="The Weekly Tradecast by UNCTAD" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=v6q5a-14bdaee-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=1&size=240&skin=ffffff" allowFullScreen />
                <span className="text"><a href="/podcast/un-trade-report-global-economy-sees-weak-growth-many-financial-and-development-challenges">Global economy sees weak growth as many financial and development challenges remain</a></span>
              </div>
              {/* <ul className="podcasts_container">
                <li>
                  <span className="icon" />
                  <span className="text"><a href="/podcast/not-fantastic-when-its-plastic-stemming-tide-ocean-rubbish">Not fantastic when it’s plastic</a></span>
                </li>
                <li>
                  <span className="icon" />
                  <span className="text"><a href="/podcast/sea-trouble-turning-our-ships-green">Sea of trouble</a></span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
