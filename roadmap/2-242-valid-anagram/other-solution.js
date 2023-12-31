// https://neetcode.io/roadmapに書かれてた回答コードに自分のコメントを追加する

/**
 * Hash Map - Frequency Counter
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = (s, t, map = new Map()) => {
    const isEqual = s.length === t.length;
    if (!isEqual) return false;

    addFrequency(s, map);      /* Time O(N) | Space O(1) */
    subtractFrequency(t, map); /* Time O(N) | Space O(1) */
    
    return checkFrequency(map);/* Time O(N) */
};
// sに対して実行
const addFrequency = (str, map) => {
    // sの各文字（a,n,a,g...)に対して実行してる
    for (const char of str) {/* Time O(N) */
        // map.get(キー)でキーに対するバリューが存在したら返す・ないならundefinedを返すのか
        // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/get
        // バリューがない時は0を返してる
        
        // +1ってなんだ？countにかかってるのか。仮にmap.get(a)の時countは
        // =>存在しないなら0、そうじゃないなら必ず存在するので1としてるんだな。でこの時点ではa:3のようにまとめられないので別メソッドでまとめるんだろう
        // バリューの合計値を計算しないのは責務の関係なのかそもそも必要ないのか。あとのコードも読む
        const count = (map.get(char) || 0) + 1;

        // バリューはa:1,a:1,n:1...じゃなくa:2,n:1...となる。なぜならfor文で1回目のa分でcount=1、2回目にcount=1+1=2となるので。
        map.set(char, count);   /* Space O(1) */
    }
}

const subtractFrequency = (str, map) => {
    // tの各文字charに対して実行
    for (const char of str) {/* Time O(N) */
     
        // このmapって何だ？sのものと同じか？→同じだな。addFでmap.setしたのちにsubFしてるので
        
        // キーに対するバリューが存在するかチェックししない時はスキップ
        // 例えばs=rat, t=carのときでかんがえる
        // map={r:1,a:1,t:1}でmap.has("c")=false,map.has("a")=true,map.has("r")=trueになるのか。でfalseの時は何もせず飛ばすのか（continue 文は、現在のループまたはラベル付きループの現在反復処理中の文の実行を終了し、次の反復処理としてループの実行を続けます。）
        // このチェックって何でいるんだ？falseの時やっても意味ないからか？=>イエス。すでに0になってるものを-1する必要はないので
        if (!map.has(char)) continue;

        // sのハッシュマップに対してバリューの値から1引く（なんで？
        // =>-1することでsのバリューと一致しなければ文字数が違うとわかるから
        const count = map.get(char) - 1;

        // これでs,t両方に含まれるものは0となってるはず
        map.set(char, count);   /* Space O(1) */
    }
};

const checkFrequency = (map) => {
    for (const [ char, count ] of map) {/* Time O(N) */
        // バリューが0ならtrue
        const isEmpty = count === 0;
        // falseならfalse返す
        // return count ===0じゃダメなのか？→それでもOKだが見やすさの関係でこう書いてそう
        // これはmapの各文字に対してreturn false return false return true...みたいに返すのか？=>いやreturn falseになった時点で終わりか
        if (!isEmpty) return false;
    }
    return true;
}
