import React from 'react'
import "./Footer.css"

export default function () {
  return (
    <section className='bg-dark' id="footer">
		<div class="container bg-dark">
			<div class="row text-center text-xs-center text-sm-left text-md-left bg-dark">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>The Morning News</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="/"><i class="fa fa-angle-double-right"></i>Home</a></li>
						{/* <li><a href="/"><i class="fa fa-angle-double-right"></i></a></li>
						<li><a href="/"><i class="fa fa-angle-double-right"></i>Categorii</a></li>
						<li><a href="/"><i class="fa fa-angle-double-right"></i>Intrebari</a></li>
						<li><a href="/"><i class="fa fa-angle-double-right"></i>Contact</a></li> */}
					</ul>
				</div>
				{/* <div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Categorii</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>«A» ( motociclete ) </a></li>
						<li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>«В» ( autoturisme ) </a></li>
						<li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>«С» ( camioane ) </a></li>
						<li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>«В-С» ( autoturisme şi camioane ) </a></li>
						<li><a href="javascript:void();"></a></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Citeste si</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Licenta</a></li>
						<li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Drepturi de autor</a></li>
						<li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Browsere și dispozitive</a></li>
						<li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Intrebări frecvente</a></li>
            <li/>
					</ul>
				</div> */}
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="/mansi" target="_blank" ><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="/mansi" target="_blank" ><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="/mansi" target="_blank" ><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="/mansi" target="_blank" ><i class="fa fa-google-plus"></i></a></li>
						<li class="list-inline-item"><a href="/mansi" target="_blank" ><i class="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr/>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
          <p>
            Powered by <a href="#!">vMansi® </a> <br/>
            Copyright &copy 2019 vMansi<br/>
          </p>
          <p class="h6">
            All right Reversed &copy <a href="/https://www.linkedin.com/in/mansi7mittal/" target='_blank' >linkedin.com/in/mansi7mittal/</a>
            <h6><span class="badge badge-primary versiune1">Version 1.0</span></h6>
          </p>
				</div>
				<hr/>
			</div>	
		</div>
	</section>
  )

}

    // <footer class="site-footer">
    //   <div class="container">
    //     <div class="row">
    //       <div class="col-sm-12 col-md-6">
    //         <h6>About</h6>
    //         <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
    //       </div>

    //       <div class="col-xs-6 col-md-3">
    //         <h6>Other Sites</h6>
    //         <ul class="footer-links">
    //           <li><a href="http://scanfcode.com/category/c-language/">Economic Times</a></li>
    //           <li><a href="http://scanfcode.com/category/front-end-development/">EI Samay</a></li>
    //           <li><a href="http://scanfcode.com/category/back-end-development/">Times Now</a></li>
    //           <li><a href="http://scanfcode.com/category/java-programming-language/">Suprabhat</a></li>
    //           <li><a href="http://scanfcode.com/category/android/">Prabhat Kiran</a></li>
    //         </ul>
    //       </div>

    //       <div class="col-xs-6 col-md-3">
    //         <h6>Quick Links</h6>
    //         <ul class="footer-links">
    //           <li>About Us</li>
    //           <li>Contact Us</li>
    //           <li>Contribute</li>
    //           <li>Privacy Policy</li>
    //           <li>Sitemap</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <hr />
    //   </div>
    //   <div class="container">
    //     <div class="row">
    //       <div class="col-md-8 col-sm-6 col-xs-12">
    //         <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by
    //           <a href="#">Good Morning news</a>.
    //         </p>
    //       </div>

    //       <div class="col-md-4 col-sm-6 col-xs-12">
    //         {/* <ul class="social-icons">
    //           <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
    //           <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
    //           <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
    //           <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
    //         </ul> */}
    //       </div>
    //     </div>
    //   </div>
    // </footer>