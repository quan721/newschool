import { useState } from 'react';
import React from 'react'
import { FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa';



function Home() {
	const [birthDate, setBirthDate] = useState('mm/dd/yyyy');

  const handleFocus = () => {
    if (birthDate === 'mm/dd/yyyy') {
      setBirthDate('');
    }
  };

  const handleBlur = () => {
    if (birthDate === '') {
      setBirthDate('mm/dd/yyyy');
    }
  };

  const handleChange = (event) => {
    setBirthDate(event.target.value);
  };
	return (
		<div>
			<body>
				<div className="header-top" style={{}}>
					<div className="container">
						<div className="row d-flex justify-content-end align-items-center">
							<div className="col-md-6 thim-have-any-question">
								Learning By Doing
							</div>
							<div className="col-md-3 mobile">
								<i className="fa fa-phone"></i>
								<a href="tel:02862678999" className="value">0938 205 966</a>
							</div>
							<div className="col-md-3 email">
								<i className="fa fa-envelope"></i>
								<a href="mailto:quangcao@ispace.edu.vn">quangcao@ispace.edu.vn</a>
							</div>
						</div>
					</div>
				</div>

				<div className="header">
					<div className="content white">
						<nav className="navbar navbar-default">
							<div className="container">
								<div className="navbar-header">
									<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
										<span className="sr-only">Toggle navigation</span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
									<img src="https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-e1661395790159.png" alt="Trường Cao đẳng An ninh mạng iSPACE" />
								</div>

								<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
									<nav className="link-effect-2" id="link-effect-2">
									<ul class="nav navbar-nav">
								<li>
									<a href="/" class="effect-3">Trang chủ</a>
								</li>								
								<li class="active">
									<a href="join" class="effect-3">Đăng ký</a>
								</li>
								<li class="dropdown">
									<a href="/Join" class="dropdown-toggle" data-toggle="dropdown">Nghành học
										<span class="caret"></span>
									</a>
									<ul class="dropdown-menu" role="menu">
										<li>
										---Cao đăng chính quy
											<a href="/ANM">An ning mạng</a>
										</li>
										<li>
											<a href="/PTPM">Phát triển phần mềm</a>
										</li>
										<li>
											<a href="/TKĐH">Thiết kế đồ họa</a>
										</li>
										<li>
											---Khóa học ngắn hạn
											<a href="/CEH">Khóa Học CEH</a>
										</li>
										<li>
											<a href="/AWH">Khóa học AWS Cloud Foundation</a>
										</li>
									</ul>
								</li>
								
							</ul>
									</nav>
								</div>
							</div>
						</nav>
					</div>
				</div>
				<div id="myCarousel" className="carousel slide" data-ride="carousel">

					<div className="carousel-inner" >
						<div className="item active">
							<div className="container">
								<div className="carousel-caption">
									<h6>Welcome To Ispace</h6>
									<h3>Leading
										<span>Colleges</span>
									</h3>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
				<div className="banner-bottom-w3l" id="about">
					<div className="container">
						<div className="title-div">
							<h3 className="tittle">
								<span>W</span>elcome
							</h3>					
						</div>
						<div className="welcome-sub-wthree">
							<div className="col-md-6 banner_bottom_left">
								<h4>Đôi chút về 
									<span> ISPACE</span>
								</h4>
								<div class="elementor-widget-container">
                             <p>&nbsp; Trường Cao Đẳng An ninh mạng iSPACE là đơn vị thuộc&nbsp; <a href="https://ngs.com.vn/" trel="noopener">NGS Group</a>. iSPACE&nbsp;tiên phong trong đào tạo 
							 thực hành từ năm 2008 theo tiêu chí tuyển sinh đi liền tuyển dụng.</p>
							 <p>&nbsp;Từ năm 2015, Trường iSPACE thực hiện chương trình tuyển sinh và đào tạo đặc biệt “CNTT- Học để làm 
								việc ngay”. Chương trình mang đến cho các bạn trẻ đam mê CNTT ba giá trị vượt trội: 70% học thực hành, 100% làm việc ngay, 100% thêm nghề phụ.</p>
                             <p>&nbsp;Năm học 2021- 2022, Trường Cao đẳng An ninh mạng iSPACE mở rộng và nâng cấp cơ sở vật chất với quy mô hiện đại và sáng tạo theo xu hướng trường học quốc tế.</p>						</div>
							</div>
							<div className="col-md-6 stats-info-agile">
								<div className="col-xs-6 stats-grid stat-border">
									<div className='numscroller numscroller-big-bottom'>100%</div>
									<p>Sinh viên có việc làm ngay</p>
								</div>
								<div className="col-xs-6 stats-grid">
									<div className='numscroller numscroller-big-bottom' >15,000</div>
									<p>Sinh viên được đào tạo</p>
								</div>
								<div className="clearfix"></div>
								<div className="child-stat">
									<div className="col-xs-6 stats-grid stat-border border-st2">
										<div className='numscroller numscroller-big-bottom'>70%</div>
										<p>Thực hành</p>
									</div>
									<div className="col-xs-6 stats-grid">
										<div className='numscroller numscroller-big-bottom'>18 Năm</div>
										<p>Kinh nghiệm đào tạo</p>
									</div>
									<div className="clearfix"></div>
								</div>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>
				<div className="services">
					<div className="container">
						<div className="title-div">
							<h3 className="tittle">
								<br />
							<h2>BAN CỐ VẤN-GIẢNG VIÊN</h2>
							</h3>
							<div className="tittle-style">

							</div>
						</div>
						<div className="services-moksrow">
							<div className="col-xs-4 services-grids-w3l">
								<div className="servi-shadow">
								<img fetchpriority="high" decoding="async" width="210" height="280" src="https://ispace.edu.vn/wp-content/uploads/2024/01/format-giang-vien-edit-option-2-10-730x1024.png" alt="PGS.TS Nguyễn Duy Hàm"/>
								<p>Chức vụ: Hiệu trưởng Trường Cao đẳng An ninh mạng Ispace </p> <br />							
								</div>
							</div>
							<div className="col-xs-4 services-grids-w3l">
								<div className="servi-shadow">
								<img fetchpriority="high" decoding="async" width="210" height="300" src="https://ispace.edu.vn/wp-content/uploads/2024/01/format-giang-vien-edit-option-2-11-730x1024.png" alt='THS.NCS Lê Hoàng Bình Nguyên' />
								<p>Chức vụ: Phó trưởng khoa Công nghệ thông tin</p>
								</div>
							</div>
							<div className="col-xs-4 services-grids-w3l">
								<div className="servi-shadow">
									<img fetchpriority="high" decoding="async" width="210" height="300" src="https://ispace.edu.vn/wp-content/uploads/2021/11/NguyenThePhuong_GV.png" alt='Kỹ sư CNTT' />
									<p>Chức vụ: Giảng viên cơ hữu khoa Quản Trị Mạng</p>
								</div>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="services-moksrow">
							<div className="col-xs-4 services-grids-w3l">
								<div className="servi-shadow">
									<img decoding="async" width="210" height="300" src="https://ispace.edu.vn/wp-content/uploads/2024/01/format-giang-vien-edit-option-2-12-730x1024.png" alt='Thầy Trương Phạm Hoài Thương' />
									<p>Chức vụ: Giảng viên cơ hữu Khoa An ning mạng</p>
								</div>
							</div>
							<div className="col-xs-4 services-grids-w3l">
								<div className="servi-shadow">
									<img decoding="async" width="210" height="300" src="https://ispace.edu.vn/wp-content/uploads/2024/01/format-giang-vien-edit-option-2-13a-730x1024.jpg" alt='Cô Lê Thị Kim Ngân' />
									<p>Chức vụ: Giảng viên cơ hữu khoa Thiết kế đồ họa</p>
								</div>
							</div>
							<div className="col-xs-4 services-grids-w3l">
								<div className="servi-shadow">
									<img  decoding="async" width="210" height="300" src="https://ispace.edu.vn/wp-content/uploads/2024/02/format-giang-vien-Anh-Dai-01.jpg" alt='Thầy Văn Minh Đại'/>
									<p>Chức vụ: Giảng viên khoa thương mại điện tử</p>
								</div>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>
				<div className="news" id="news">
					<div className="container">
						<div className="title-div">
							
							<div className="register-form-main">
		<div className="container">
			<div className="title-div">
				<h3 className="tittle">
					<span>F</span>orm
					
				</h3>
				<div className="tittle-style">

				</div>
			</div>
			<div className="register-form">
				<form action="#" method="post">
					<div className="fields-grid">
						<div className="styled-input">
							<input type="text" placeholder="Họ và tên" name="Your name" required=""/>
						</div>
						<div className="styled-input">
							 <div className="styled-input">
                   <input
                          id="datepicker"
                          placeholder="Ngày sinh"
                          name="Text"
        type="text"
        value={birthDate}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        required
      />
    </div>
						</div>
						<div className="styled-input agile-styled-input-top">
							<select className="category2"  required="">								
								<option value="">Sinh viên</option>
								<option value="">HS hoàn thành THPT</option>
								<option value="">HS đang học lớp 12</option>
								<option value="">Người đi làm</option>
							</select>
						</div>
						<div className="styled-input">
							<input type="email" placeholder="E-mail của bạn" name="Email" required=""/>
						</div>
						<div className="styled-input">
							<input type="text" placeholder="Số điện thoại của bạn" name="Phone" required=""/>
						</div>
						<div className="styled-input agile-styled-input-top">
							<select className="category2" required="">
								<option value="">An ninh mạng</option>
								<option value="">Phát triển phần mềm</option>
								<option value="">Thiết kế đồ họa</option>							
							</select>
							<span></span>
						</div>
					
						<div className="clearfix"> </div>
					</div>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		</div>
	</div>
	<h3 className="tittle">
								<span>L</span>earning
								By
								<span> D</span>oing
							</h3>
							<div className="tittle-style">

							</div>
						</div>
						
					</div>
				</div>
				<div className="modal about-modal fade" id="myModal" tabindex="-1" role="dialog">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<h4 className="modal-title">Best
									<span>Study</span>
								</h4>
							</div>
							<div className="modal-body">
								<div className="model-img-info">
									<img src="images/e1.jpg" alt="" />
									<p>Duis venenatis, turpis eu bibendum porttitor, sapien quam ultricies tellus, ac rhoncus risus odio eget nunc. Pellentesque
										ac fermentum diam. Integer eu facilisis nunc, a iaculis felis. Pellentesque pellentesque tempor enim, in dapibus turpis
										porttitor quis. Suspendisse ultrices hendrerit massa. Nam id metus id tellus ultrices ullamcorper. Cras tempor massa
										luctus, varius lacus sit amet, blandit lorem. Duis auctor in tortor sed tristique. Proin sed finibus sem</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="middle-sec-agile">
					<div className="container">
						<h4>Học tại &nbsp;
							<span>ISPACE</span></h4>
						<ul>
							<li>
								<div className="midle-left-w3l">
									<span className="fa fa-check" aria-hidden="true"></span>
								</div>
								<div className="middle-right">
									<h5> 100% CÓ VIỆC LÀM NGAY KHI TỐT NGHIỆP</h5>
									<p>Mô hình giảng dạy theo đặt hàng từ doanh nghiệp, đầu ra hơn 100 doanh nghiệp, cam kết giới thiệu đến khi có việc làm.</p>
								</div>
								<div className="clearfix"></div>
							</li>
							<li>
								<div className="midle-left-w3l">
									<span className="fa fa-check" aria-hidden="true"></span>
								</div>
								<div className="middle-right">
									<h5>CƠ SỞ VẬT CHẤT HIỆN ĐẠI</h5>
									<p>Cao đẳng duy nhất có trung tâm SOC (Security Operation Center).</p>
								</div>
								<div className="clearfix"></div>
							</li>
							<li>
								<div className="midle-left-w3l">
									<span className="fa fa-check" aria-hidden="true"></span>
								</div>
								<div className="middle-right">
									<h5>70% THỜI GIAN THỰC HÀNN</h5>
									<p>Mô hình đào tạo chú trọng thực hành với thời lượng 30% lý thuyết, 70% thực hành <br />
                                        Tốt nghiệp với 1 bằng cao đẳng và 2 chứng chỉ quốc tế</p>
								</div>
								
								<div className="clearfix"></div>
							</li>
						</ul>
						<a className="button-style" href="/Join">Tham Gia Ngay</a>
					</div>
					<div className="pencil-img">
						<img src="images/bg5.png" alt="" />
					</div>
				</div>
				<div className="testimonials">
					<div className="container">
						<div className="title-div">
							<h3 className="tittle">
								<span>T</span>in &nbsp;
								<span>N</span>ổi &nbsp;
								<span>B</span>ật &nbsp;
							</h3>
							
						</div>
						<ul id="flexiselDemo1">
							<li>
								<div className="three_testimonials_grid_main">
									<div className="col-xs-3 three_testimonials_grid_pos">
										<div className="grid-test-allah-agile">
											
										

                                       <img loading="lazy" className='img-responsive' decoding="async" src="https://ispace.edu.vn/wp-content/uploads/2024/05/Banner-su-kien-fb-iConnect-5-450x267.png" 
                                    alt="iCONNECTSPACE #5: Bán hàng trên sàn hay quảng cáo trên mạng chính thức khởi động." title="Banner sự kiện fb – iConnect 5" width="450" height="267" data-skip-lazy=""/>
											
										</div>
									</div>
									<div className="col-xs-9 three_testimonials_grid">
										<div className="three_testimonials_grid1">
											<h5>iCONNECTSPACE #5</h5>
											<p>MAY 26, 2024</p>
										</div>
										<p>
										Bán hàng trên sàn hay quảng cáo trên mạng diễn ra thành công tốt đẹp
										</p>
									</div>
									<div className="clearfix"> </div>
								</div>
							</li>
							<li>
								<div className="three_testimonials_grid_main">
									<div className="col-xs-3 three_testimonials_grid_pos">
										<div className="grid-test-allah-agile">
										
										<img loading="lazy" className="img-responsive" decoding="async" src="https://ispace.edu.vn/wp-content/uploads/2024/05/gian-lan-qua-mail-450x267.jpg"
											 alt="Đài HTV phỏng vấn chuyên gia iSPACE với chuyên đề cảnh báo chiêu trò gian lận qua mail"
											  title="gian-lan-qua-mail" width="450" height="267" data-skip-lazy=""></img>
										</div>
									</div>
									<div className="col-xs-9 three_testimonials_grid">
										<div className="three_testimonials_grid1">
											<h5>Cảnh báo chiêu trò gian lận qua mail</h5>
											<p>MAY 22, 2024</p>
										</div>
										<p>
										Đài HTV phỏng vấn chuyên gia iSPACE với chuyên đề cảnh báo chiêu trò gian lận qua mail
										</p>
									</div>
									<div className="clearfix"> </div>
								</div>
							</li>
							<li>
								<div className="three_testimonials_grid_main">
									<div className="col-xs-3 three_testimonials_grid_pos">
										<div className="grid-test-allah-agile">
										<img loading="lazy" className='img-responsive' decoding="async" src="https://ispace.edu.vn/wp-content/uploads/2024/05/19-450x267.png"
										 alt="Sự kiện iCONNECTSPACE #5: Bán hàng trên sàn hay quảng cáo trên mạng diễn ra thành công tốt đẹp"
										  title="su-kien-iconnectspace" width="450" height="267" data-skip-lazy=""/>
											
										</div>
									</div>
									<div className="col-xs-9 three_testimonials_grid">
										<div className="three_testimonials_grid1">
											<h5>iCONNECTSPACE #5</h5>
											<p>MAY 11, 2024</p>
										</div>
										<p>
										Bán hàng trên sàn hay quảng cáo trên mạng chính thức khởi động.
										</p>
									</div>
									<div className="clearfix"> </div>
								</div>
							</li>

						</ul>
					</div>
				</div>
				<div className="mkl_footer">
					<div className="sub-footer">
						<div className="container">
							<div className="mkls_footer_grid">
								<div className="col-xs-4 mkls_footer_grid_left">
									<h4>Location:</h4>
									<p>240 Võ Văn Ngân, phường Bình Thọ, 
										<br /> TP Thủ Đức, TPHCM</p>
								</div>
								<div className="col-xs-4 mkls_footer_grid_left">
									<h4>Mail Us:</h4>
									<p>
										<span>Phone : </span>0938 205 966</p>
									<p>
										<span>Email : </span>
										<a href="mailto:quangcao@ispace.edu.vn">quangcao@ispace.edu.vn</a>
									</p>
								</div>
								<div className="col-xs-4 mkls_footer_grid_left">
									<h4>Opening Hours:</h4>
									<p>Working days : 8am-10pm</p>
									<p>Sunday
										<span>(closed)</span>
									</p>
								</div>
								<div className="clearfix"> </div>
							</div>
							<br /> <br />
							<div className="footer-middle-thanks">
								<h2>Thanks For watching</h2>
							</div>
						</div>
					</div>
					<div className="footer-copy-right">
						<div className="container">

							<div className="footercopy-social" style={{aline: 'center'}} >
							<div className="icon-container">
      <a
        href="https://www.youtube.com/user/ispacechannel"
        target="_blank"
        rel="noopener noreferrer"
        className="youtube"
      >
        <FaYoutube size={24} />
      </a>
      <a
        href="https://www.facebook.com/ispace.vn"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://www.tiktok.com/@caodanganninhmangispace"
        target="_blank"
        rel="noopener noreferrer"
        className="tiktok"
      >
        <FaTiktok size={24} />
      </a>
    </div>
							</div>
							<div className="clearfix"></div>
						</div>
					</div>
				</div>

			</body>
		</div>

	)
}

export default Home