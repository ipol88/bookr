chrome.runtime.sendMessage({from:"content",subject:"showPageAction"}),chrome.runtime.onMessage.addListener((e,o,t)=>{if("popup"===e.from&&"DOMInfo"===e.subject){let e=document.documentElement.outerHTML.toString(),o=e.match(/(member_id=(\d+)|profile.php\?id=(\d+)|hovercard\/user.php\?id=(\d+))/g).map(e=>/(\d+)/g.exec(e)[1]),r=new Set([...o]),n=Array.from(r);e="",t(n)}else if("popup"===e.from&&"IdInfo"===e.subject){let e=document.documentElement.outerHTML.toString(),o=/fb:\/\/group\/(\d+)/g,r=!!/profile_owner[:,",&quot;]+(\d+)/g.test(e)&&"USER ID : "+/profile_owner[:,",&quot;]+(\d+)/g.exec(e)[1],n=!!o.test(e)&&"GROUP ID : "+/fb:\/\/group\/(\d+)/g.exec(e)[1];if(r||n){t([r,n].filter(Boolean))}else t(!1);e=""}});