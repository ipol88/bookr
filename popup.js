



window.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {


    document.getElementById("exeu").addEventListener("click", function () {

     

            chrome.tabs.sendMessage(
                tabs[0].id, {
                    from: 'popup',
                    subject: 'DOMInfo'
                }, x => {

                    document.getElementById('getid').textContent = x.join("\n");
                    document.querySelector("#addnum").textContent = x.length+"  ID";
                }




            );
        });


        chrome.tabs.sendMessage(
            tabs[0].id, {
                from: 'popup',
                subject: 'IdInfo'
            }, x => {

                if(x){
                    document.querySelector("#addnum").textContent = x[0];

                }


            });


    });
});