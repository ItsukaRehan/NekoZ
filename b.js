function extractDomain(t) {
    return (t.indexOf("://") > -1 ? t.split("/")[2] : t.split("/")[0]).split(":")[0].split("?")[0]
}

function exception() {
    new Array;
    return setting.exceptionurl = setting.exceptionurl, setting.exceptionurl.split(",")
}

function convertstr(t) {
    return t.replace(/^\s+/, "").replace(/\s+$/, "")
}
var aesCrypto = {};
! function(t) {
    "use strict";
    t.formatter = {
        prefix: "",
        stringify: function(t) {
            var e = this.prefix;
            return (e += t.salt.toString()) + t.ciphertext.toString()
        },
        parse: function(t) {
            var e = CryptoJS.lib.CipherParams.create({}),
                r = this.prefix.length;
            return 0 !== t.indexOf(this.prefix) ? e : (e.ciphertext = CryptoJS.enc.Hex.parse(t.substring(16 + r)), e.salt = CryptoJS.enc.Hex.parse(t.substring(r, 16 + r)), e)
        }
    }, t.encrypt = function(e, r) {
        try {
            return CryptoJS.AES.encrypt(e, r, {
                format: t.formatter
            }).toString()
        } catch (t) {
            return ""
        }
    }, t.decrypt = function(e, r) {
        try {
            return CryptoJS.AES.decrypt(e, r, {
                format: t.formatter
            }).toString(CryptoJS.enc.Utf8)
        } catch (t) {
            return ""
        }
    }
}(aesCrypto), setting.exceptionurl ? setting.exceptionurl += "," + window.location.href : setting.exceptionurl = window.location.href;
var exception = exception();

function showurl(t) {
    for (var e = !1, r = 0, n = exception.length, i = "", o = "", s = document.getElementsByTagName("a"), c = new Array, a = t.feed.openSearch$totalResults.$t, f = 0; f < a; f++) {
        for (var h, u = 0; u < t.feed.entry[f].link.length; u++)
            if ("alternate" == t.feed.entry[f].link[u].rel) {
                h = t.feed.entry[f].link[u].href;
                break
            }
        c[f] = h;
        var p = Math.random() * c.length;
        p = parseInt(p)
    }
    for (f = 0; f < s.length; f++) {
        for (e = !1, r = 0; 0 == e && r < n;) i = extractDomain(s[f].href), o = extractDomain(exception[r]), i.match(o) && (e = !0), r++;
        0 == e && (s[f].href = 'https://nyansubs.yuudachi.xyz/a/' + setting.path + btoa(btoa('pepekstrKzrMekiUsMek' + convertstr(s[f].href)), convertstr("root")), s[f].rel = "nofollow", s[f].target = "_blank")
    }
}
