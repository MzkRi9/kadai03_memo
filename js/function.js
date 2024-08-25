//投稿ボタンをクリックしたら

$("#save").on("click",function(){
    console.log($("#date-input").val());
    //記入した年月日を取得する
    const date = new Date($("#date-input").val());
    const y = date.getFullYear();
    const m = date.getMonth();
    //月だけが0から始まるので、8を選択してもlogが7になる。そのため後で+1の必要がある
    console.log(m);
    const truem = m+1;
    const d = date.getDate();

    //記入した日付をlacalstorageに保存する
    localStorage.setItem("date",y+"年"+truem+"月"+d+"日");

    //記入した開始時間を取得する
    const st = $("input[name='start-time']").val();
    console.log(st);

    //記入した終了時間を取得する
    const et = $("input[name='end-time']").val();
    console.log(et);

    //取得した時間帯をlocalstorageに保存する
    localStorage.setItem("event time",st+" - "+et);

    //textareaで入力した内容をlocalstorageに保存する
    const p = $("#new-post").val();
    localStorage.setItem("post",p);

    //保存したよとメッセージが出る
    alert("情報を投稿しました");

    //数字の後ろに年月日の漢字を入れてpost-timeに表示させる
    $(".post-time").html(y+"年"+(Number(m + 1)+"月"+d+"日 "+st+" - "+et));
    
    //保存したデータをpost-viewに書き込む
    $(".post-content").val(p);
    
    //post-viewを表示する
    $("#post-view").fadeIn(200);

    //new-postの内容を最初に戻す
    //テキストを変えたい・・・・・

    //文字色を変える
    $("#new-post").css({"color":"#a9a9a9"});

});

//2.ページ読み込み：保存データ取得表示

//dateを取得する
const date = localStorage.getItem("date");
const eventtime = localStorage.getItem("event time");

if(localStorage.getItem("date")){
    // ロード時にlocalstorageにpostのデータがあれば取得する
    localStorage.getItem("event time");
    $(".post-time").html(date + " " +eventtime);
}


//開始時間を取得する
const st = localStorage.getItem("st");

if(localStorage.getItem("st")){
    //ロード時にlocalstorageにpostのデータがあれば取得する

    $(".post-time").html(y+"年"+(Number(m + 1)+"月"+d+"日 "+st+" - "+et));

    //postの内容を.post-contentに表示させる
    $(".post-time").val(p);

    //post-viewを瞬時に表示させる
    $("#post-view").fadeIn(0);
}


if(localStorage.getItem("post")){
    //ロード時にlocalstorageにpostのデータがあれば取得する
    const p = localStorage.getItem("post");

    //postの内容を.post-contentに表示させる
    $(".post-content").val(p);

    //post-viewを瞬時に表示させる
    $("#post-view").fadeIn(0);
}

$(".delete").on("click",function(){
    localStorage.removeItem("post");
    alert("情報を削除しました");
    $("#post-view").fadeOut(200);
});
