<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/">
        <section class="section dnn-hr3 wow fadeInDown" data-wow-delay=".3s">
            <div class="container">
                <div class="block-title text-center">
                    <h1>Vị trí tuyển dụng</h1>
                </div>
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th class="text-center" scope="col">STT</th>
                            <th class="text-center" scope="col">VỊ TRÍ</th>
                            <th class="text-center" scope="col">SỐ LƯỢNG</th>
                            <th class="text-center" scope="col">KHU VỰC</th>
                            <th class="text-center" scope="col">HẠN NỘP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:apply-templates select="/NewsList/News"></xsl:apply-templates>
                    </tbody>
                </table>
            </div>
        </section>
    </xsl:template>
    <xsl:template match="News">
        <tr>
            <th class="text-center" scope="row">
                <xsl:value-of select="position()"></xsl:value-of>
            </th>
            <td>
                <a>
                    <xsl:attribute name="href">
                        <xsl:value-of select="Url"></xsl:value-of>
                    </xsl:attribute>
                    <xsl:attribute name="title">
                        <xsl:value-of select="Title"></xsl:value-of>
                    </xsl:attribute>
                    <xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>
                </a>
                <xsl:value-of select="EditLink" disable-output-escaping="yes"></xsl:value-of>
            </td>
            <td class="text-center">
                <xsl:value-of select="SubTitle"></xsl:value-of>
            </td>
            <td class="text-center">
                <xsl:value-of select="BriefContent"></xsl:value-of>
            </td>
            <td class="text-center">
                <xsl:value-of select="CreatedDate"></xsl:value-of>
            </td>
        </tr>
    </xsl:template>
</xsl:stylesheet>