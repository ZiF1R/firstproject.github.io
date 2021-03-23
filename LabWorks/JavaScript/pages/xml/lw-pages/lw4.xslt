<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body style="height: 100vh; justify-content:center; display: flex; align-items: center;">
                <table border="1" style="text-align:center">
                    <tr bgcolor="#9acd32">
                        <th style="min-width: 7vw;">Фамилия</th>
                        <th style="min-width: 7vw;">Имя</th>
                        <th style="min-width: 7vw;">Отчество</th>
                        <th style="min-width: 7vw;">Средний балл</th>
                        <th style="min-width: 7vw;">Год рождения</th>
                    </tr>
                    <xsl:for-each select="students/student">
                        <xsl:sort select="birth"/>
                        <tr>
                            <xsl:choose>
                                <xsl:when test="average-mark &lt; 6">
                                    <td style="color: coral"><xsl:value-of select="last-name"/></td>
                                </xsl:when>
                                <xsl:when test="average-mark &gt; 6">
                                    <td><xsl:value-of select="last-name"/></td>
                                </xsl:when>
                                <xsl:otherwise>
                                    <td style="color: green"><xsl:value-of select="last-name"/></td>
                                </xsl:otherwise>
                            </xsl:choose>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="patronymic"/></td>
                            <td><xsl:value-of select="average-mark"/></td>
                            <td><xsl:value-of select="birth"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>