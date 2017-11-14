/*
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service.
There is no restriction on how your encode/decode algorithm should work.
You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
 */

/*
题目：
TinyURL是URL的短网址。
编码的时候，将长网址精简为短网址，
解码的时候，将短网址变为之前的长网址。

分析：
该题目的主要目的就是让长网址和短网址建立一一对应的关系，
这就让我想到了哈希表（散列表）。
 */

/*
下面的方法是加解密为空算法的情况。
 */

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    return longUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return shortUrl;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

/*
加解密算法不为空时的一种解法。
 */

let urls = [];

var encode = function(longUrl) {
    let uniqueKey = Date.now().toString(36);//这里不唯一
    urls[uniqueKey] = longUrl;
    return "http://tinyurl.com/" + uniqueKey;
};

var decode = function(shortUrl) {
    return urls[shortUrl.split("com/")[1]];
};
