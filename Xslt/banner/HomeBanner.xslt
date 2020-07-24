<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/">
        <div class="swiper-container dnn-home-banner__slide">
            <div class="swiper-wrapper">
                <xsl:apply-templates select="/BannerList/Banner" mode="Slider"></xsl:apply-templates>
            </div>
            <div class="down-page-icon">
                <a class="crolldown" href="#dnn-home1">
                    <img src="/Data/Sites/1/skins/default/assets/icons
                    /download.png" alt=""></img>
                </a>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </xsl:template>
    <xsl:template match="Banner" mode="Slider">
        <xsl:if test="position()=1">
            <div class="swiper-slide">
                <a class="swiper-inner">
                    <xsl:attribute name="setBackground">
                        <xsl:value-of select="ImageUrl"></xsl:value-of>
                    </xsl:attribute>
                    <xsl:attribute name="title">
                        <xsl:value-of select="Title"></xsl:value-of>
                    </xsl:attribute>
                    <img >
                        <xsl:attribute name="src">
                            <xsl:value-of select="ImageUrl"></xsl:value-of>
                        </xsl:attribute>
                        <xsl:attribute name="alt">
                            <xsl:value-of select="Title"></xsl:value-of>
                        </xsl:attribute>
                    </img>
                </a>
                <div class="icon">
                    <a>
                        <xsl:attribute name="data-fancybox"></xsl:attribute>
                        <xsl:attribute name="href">
                            <xsl:value-of select="Url"></xsl:value-of>
                        </xsl:attribute>
                        <xsl:attribute name="title">
                            <xsl:value-of select="Title"></xsl:value-of>
                        </xsl:attribute>
                        <img src="/Data/Sites/1/skins/default/assets/icons/play-button.png" alt=""></img>
                    </a>
                </div>
                <div class="content">
                    <xsl:value-of disable-output-escaping="yes" select="Description"></xsl:value-of>
                </div>
            </div>
        </xsl:if>
        <xsl:if test="position()>1">
            <div class="swiper-slide">
                <a class="swiper-inner">
                    <xsl:attribute name="setBackground">
                        <xsl:value-of select="ImageUrl"></xsl:value-of>
                    </xsl:attribute>
                    <xsl:attribute name="title">
                        <xsl:value-of select="Title"></xsl:value-of>
                    </xsl:attribute>
                    <img >
                        <xsl:attribute name="src">
                            <xsl:value-of select="ImageUrl"></xsl:value-of>
                        </xsl:attribute>
                        <xsl:attribute name="alt">
                            <xsl:value-of select="Title"></xsl:value-of>
                        </xsl:attribute>
                    </img>
                </a>
                <div class="content">
                    <xsl:value-of disable-output-escaping="yes" select="Description"></xsl:value-of>
                </div>
            </div>
        </xsl:if>
    </xsl:template>
</xsl:stylesheet>