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
                                <xsl:value-of select="/NewsDetail/EndDate"></xsl:value-of>
                            </div>
                            <div class="icon-social">
                                <ul>
                                    <li>
                                        <a>
                                            <xsl:attribute name="href">
                                                <xsl:text disable-output-escaping="yes">
													https://twitter.com/home?status=
												</xsl:text>
                                                <xsl:value-of disable-output-escaping="yes" select="/NewsDetail/FullUrl"></xsl:value-of>
                                            </xsl:attribute>
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
                            <xsl:apply-templates select="/NewsDetail/NewsAttributes"></xsl:apply-templates>
                        </div>
                        <xsl:value-of disable-output-escaping="yes" select="/NewsDetail/FullContent"></xsl:value-of>
                    </div>
                    <div class="col-lg-3 col-md-12 col-12 dnn-hr-detail__right">
                        <div class="dnn-hr-detail__right__btn">
                            <a class="btn btn__apply">
                                <xsl:attribute name="data-type">
                                    <xsl:text>iframe</xsl:text>
                                </xsl:attribute>
                                <xsl:attribute name="data-fancybox">
                                    <xsl:text>Form ứng tuyển</xsl:text>
                                </xsl:attribute>
                                <xsl:attribute name="data-src">
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
                                <xsl:apply-templates select="/NewsDetail/NewsOther"></xsl:apply-templates>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </xsl:template>
    <xsl:template match="NewsAttributes">
        <div class="dnn-hr-detail__left__content__list">
            <p>
                <xsl:value-of disable-output-escaping="yes" select="Title"></xsl:value-of>
            </p>
            <xsl:value-of disable-output-escaping="yes" select="Content"></xsl:value-of>
        </div>
    </xsl:template>
    <xsl:template match="NewsOther">
        <li class="dnn-hr-detail__right__content__list__item">
            <a href="chi-tiet-tuyen-dung.html">
                <div class="date">
                    <span class="material-icons">event_note</span>
                    <xsl:value-of disable-output-escaping="yes" select="EndDate"></xsl:value-of>
                </div>
                <h2>
                    <xsl:value-of disable-output-escaping="yes" select="Title"></xsl:value-of>
                </h2>
            </a>
        </li>
    </xsl:template>
</xsl:stylesheet>