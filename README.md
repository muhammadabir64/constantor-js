<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="getstr_0"></a>getstr</h1>
<h3 class="code-line" data-line-start=1 data-line-end=2 ><a id="A_collection_of_string_constants_for_JavaScript_1"></a>A collection of string constants for JavaScript</h3>
<p class="has-line-data" data-line-start="2" data-line-end="3">A constant is used to define a fixed value in a variable that cannot be modified anywhere in the code following declaration. This JavaScript module contains some string constants that can be used for various purposes like generate random string for passwords, tokens etc…</p>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Plugin</th>
<th>README</th>
</tr>
</thead>
<tbody>
<tr>
<td>ascii_lowercase</td>
<td>abcdefghijklmnopqrstuvwxyz</td>
</tr>
<tr>
<td>ascii_uppercase</td>
<td>ABCDEFGHIJKLMNOPQRSTUVWXYZ</td>
</tr>
<tr>
<td>ascii_letters</td>
<td>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz</td>
</tr>
<tr>
<td>digits</td>
<td>0123456789</td>
</tr>
<tr>
<td>hexdigits</td>
<td>0123456789abcdefABCDEF</td>
</tr>
<tr>
<td>octdigits</td>
<td>01234567</td>
</tr>
<tr>
<td>punctuation</td>
<td>!#$%&amp;`’&quot;(){}[]*+,-_~./\:;&lt;&gt;=?@^|</td>
</tr>
<tr>
<td>whitespace</td>
<td>\t\n\r\v\f</td>
</tr>
<tr>
<td>printable</td>
<td>includes the values of digits, ascii_letters, punctuation &amp; whitespace</td>
</tr>
</tbody>
</table>
<h2 class="code-line" data-line-start=16 data-line-end=17 ><a id="usage_16"></a>usage</h2>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20" class="language-sh">npm i getstr
</code></pre>
<pre><code class="has-line-data" data-line-start="21" data-line-end="24" class="language-sh">const getstr = require(<span class="hljs-string">"getstr"</span>);
console.log(getstr.ascii_lowercase);
</code></pre>
<p class="has-line-data" data-line-start="24" data-line-end="25"><strong>output</strong></p>
<pre><code class="has-line-data" data-line-start="26" data-line-end="28" class="language-sh">abcdefghijklmnopqrstuvwxyz
</code></pre>
<p class="has-line-data" data-line-start="29" data-line-end="30"><a href="https://docs.python.org/3/library/string.html" target="_blank">This module was inspired by python string/lib</a></p>
