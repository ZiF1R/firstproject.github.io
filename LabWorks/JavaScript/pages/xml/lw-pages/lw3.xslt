<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body style="height: 100vh; justify-content:center; display: flex; align-items: center;">
                <table border="1" style="text-align:center">
                    <tr bgcolor="#9acd32">
                        <th colspan="8">Специальность: ДЭиВИ</th>
                    </tr>

                    <tr bgcolor="#9acd32">
                        <th style="min-width: 7vw;" rowspan="2" colspan="2">Университет</th>
                        <th style="min-width: 7vw;" colspan="2">Проходной балл</th>
                        <th style="min-width: 7vw;" colspan="2">План набора</th>
                        <th style="min-width: 7vw;" rowspan="2" colspan="2">Город</th>
                    </tr>
                    <tr bgcolor="#9acd32">
                        <th style="min-width: 7vw;">Бюджет</th>
                        <th style="min-width: 7vw;">Платное</th>
                        <th style="min-width: 7vw;">Бюджет</th>
                        <th style="min-width: 7vw;">Платное</th>
                    </tr>
                    <xsl:for-each select="table/info">
                        <tr>
                            <td colspan="2"><xsl:value-of select="university"/></td>
                            <td><xsl:value-of select="points-budget"/></td>
                            <td><xsl:value-of select="points-pay"/></td>
                            <td><xsl:value-of select="set-budget"/></td>
                            <td><xsl:value-of select="set-pay"/></td>
                            <td colspan="2"><xsl:value-of select="city"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>