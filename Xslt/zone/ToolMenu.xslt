<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/">
        <div id="block__tool">
            <ul class="main-tool">
                <li class="main-tool__item">
                    <a href="">
                        <em class="fa fa-comments"></em>
                        <p>Tư vấn</p>
                    </a>
                </li>
                <li class="main-tool__item">
                    <a href="">
                        <em class="fa fa-phone"></em>
                        <p>Hotline</p>
                    </a>
                    <div class="submenu">
                        <div class="submenu__item">
                            <a href="">
                                <em class="fa fa-map-marker"></em>
                            </a>
                        </div>
                        <div class="submenu__item">
                            <a href="">
                                <em class="fa fa-envelope-open"></em>
                            </a>
                        </div>
                        <div class="submenu__item">
                            <a href="">
                                <em class="fa fa-phone"></em>
                            </a>
                        </div>
                    </div>
                </li>
                <li class="main-tool__item">
                    <a href="">
                        <em class="fa fa-question-circle"></em>
                        <p>Hỏi đáp</p>
                    </a>
                </li>
                <li class="main-tool__item">
                    <a href="">
                        <em class="fa fa-map"></em>
                        <p>Bản đồ</p>
                    </a>
                </li>
            </ul>
        </div>
    </xsl:template>
</xsl:stylesheet>