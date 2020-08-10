<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/">
        <section class="section dnn-hr-detail wow fadeInDown" data-wow-delay=".3s">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-12 dnn-hr-detail__left">
                        <div class="block-title">
                            <h1>
                                <xsl:value-of select="/NewsDetail/Title"></xsl:value-of>
                                <xsl:value-of select="/NewsDetail/EditLink" disable-output-escaping="yes"></xsl:value-of>
                            </h1>
                        </div>
                        <div class="dnn-hr-detail__left__timeline">
                            <div class="time">
                                <span class="material-icons">event_note</span>
                                <xsl:value-of select="/NewsDetail/CreatedDate"></xsl:value-of>
                            </div>
                            <div class="icon-social">
                                <ul>
                                    <li>
                                        <a href="">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <xsl:attribute name="href">
                                                <xsl:text disable-output-escaping="yes">
														https://www.facebook.com/sharer/sharer.php?u=
													</xsl:text>
                                                <xsl:value-of disable-output-escaping="yes" select="/NewsDetail/FullUrl"></xsl:value-of>
                                            </xsl:attribute>
                                            <em class="fa fa-facebook"></em>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="dnn-hr-detail__left__content">
                            <xsl:value-of disable-output-escaping="yes" select="/NewsDetail/Fullcontent"></xsl:value-of>
                        </div>
                        <xsl:apply-templates select="/NewsDetail/NewsAttributes"></xsl:apply-templates>
                        <div class="dnn-hr-detail__left__content__list">
                            <p>Mô tả công việc</p>
                            <ul>
                                <li>
                                    <p>Hỗ trợ khách hàng mua hàng, tăng doanh thu bán hàng thông qua giới thiệu tư vấn sản phẩm, giới thiệu các chương trình ưu đãi. Cung cấp dịch vụ bán hàng chuyên nghiệp đáp ứng tốt nhu cầu của khách hàng.</p>
                                </li>
                                <li>
                                    <p>Luôn cập nhật kiến thức về sản phẩm để giới thiệu và tư vấn khách hàng mua hàng, hướng dẫn khách hàng về sử dụng và bảo quản sản phẩm.</p>
                                </li>
                                <li>
                                    <p>Thực hiện bán hàng theo các mục tiêu của các CTKM và CSKH, thúc đẩy doanh số các nhóm hàng, khách hàng mục tiêu.</p>
                                </li>
                                <li>
                                    <p>Thực hiện việc giải quyết khiếu nại và các thắc mắc của khách hàng.</p>
                                </li>
                                <li>
                                    <p>Phát triển và chăm sóc khách hàng thân thiết trước và sau mua hàng nhằm gia tăng gắn kết khách hàng với cty</p>
                                </li>
                                <li>
                                    <p>Hoàn thành chỉ tiêu kinh doanh của cá nhân và hỗ trợ đồng đội trong các hoạt động kinh doanh để đảm bảo hoàn thành các mục tiêu chung</p>
                                </li>
                                <li>
                                    <p>Tuân thủ quy trình xuất nhập kho, giao nhận. Đảm bảo tồn kho hàng hóa đúng, đủ.</p>
                                </li>
                                <li>
                                    <p>Tuân thủ quy trình vệ sinh, vận chuyển, bảo quản hàng hóa đúng cách.</p>
                                </li>
                                <li>
                                    <p>Kiểm tra và đảm bảo hành hóa đủ tiêu chuẩn về chất lượng và bao bì, tem nhãn trước khi bán và xuất nhập kho nội bộ. </p>
                                </li>
                                <li>
                                    <p>Kiểm kê hàng hóa định kỳ theo định kỳ hàng ngày / tháng / quý đúng theo quy định.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 col-12 dnn-hr-detail__right">
                        <div class="dnn-hr-detail__right__btn">
                            <a class="btn btn__apply">
                                <xsl:attribute name="href">
                                   <xsl:value-of select="/NewsDetail/ApplyUrl" disable-output-escaping="yes"/>
                                </xsl:attribute>
                                <xsl:attribute name="title">
                                    <xsl:value-of select="Title"></xsl:value-of>
                                </xsl:attribute>
                                <xsl:value-of select="/NewsDetail/Apply"></xsl:value-of>
                                <xsl:text>ứng tuyển</xsl:text>
                            </a>
                            <a class="btn btn__down" href="">tải form ứng tuyển</a>
                        </div>
                        <div class="dnn-hr-detail__right__content">
                            <div class="block-title">
                                <h1>Vị trí khác</h1>
                            </div>
                            <ul class="dnn-hr-detail__right__content__list">
                                <li class="dnn-hr-detail__right__content__list__item">
                                    <a href="chi-tiet-tuyen-dung.html">
                                        <div class="date">
                                            <span class="material-icons">event_note</span>10.02.2020
                                        
                                        
                                        
                                        </div>
                                        <h2>Chuyên viên kế toán thuế</h2>
                                    </a>
                                </li>
                                <xsl:apply-templates select="/NewsDetail/NewsOther"></xsl:apply-templates>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </xsl:template>
</xsl:stylesheet>