function nth(n){return["st","nd","rd"][(((n<0?-n:n)+90)%100-10)%10-1]||"th"}

document.getElementById('qe').onclick = async function() {
    const a = Number(document.getElementById('aquad').value)
    const b = Number(document.getElementById('bquad').value) * -1
    const c = Number(document.getElementById('cquad').value)

    if(isNaN(a) || isNaN(b) || isNaN(c) || Boolean(document.getElementById('aquad').value) === false || Boolean(document.getElementById('bquad').value) === false || Boolean(document.getElementById('cquad').value) === false) return document.getElementById('res').innerHTML = 'Input a valid number!'

    d = Math.sqrt(Math.pow(b, 2) - 4 * a * c)
    e = 2 * a

    if(d % 1 !== 0){
        ans = Math.pow(b, 2) - 4 * a * c;
        return document.getElementById('res').innerHTML = `The roots are <b>${b} &plusmn; &Sqrt;${ans} over ${e}</b>`
    }

    ans = b + d;

    //Looking for the GCF of the numerator and denominator then
    //if there's no GCF to be found then the final answer is the 
    //current answer.
    x = Math.abs(ans);
    y = Math.abs(e);
    while(y) [x, y] = [y, x % y];

    if(x % 1 === 0){
        ans = ans / x;
        e = e / x;
        if(e !== 1){
            x = Math.abs(ans);
            y = Math.abs(e);
            while(y) [x, y] = [y, x % y];

            ans = ans / x;
            e = e / x;
        
            //Simplifying the fraction (if it is a fraction) by finding the GCF. If there's
            //no GCF to be found then the current answer is the final answer.
            x = Math.abs(ans);
            y = Math.abs(e);
            while(y) [x, y] = [y, x % y];
            if(x % 1 === 0 && e / x !== 1){
                ans = ans / x;
                e = e / x;

                if(e === 1) ans = ans;
                else ans = `${ans + '/' + e}`
            } else {
                if(e !== 1) ans = `${ans + '/' + e}`
                else ans = ans;
            }
        } else {
            ans = ans;
        }
    } else {
        if(e === 1) ans = ans
        else ans = `${ans + '/' + e}`
    }

    //I've reassigned e as 2 * a here because it's
    //already been reassigned before (look up).
    e = 2 * a
    ans1 = b - d;

    //Looking for the GCF of the numerator and denominator then
    //if there's no GCF to be found then the final answer is the 
    //current answer.
    x = Math.abs(ans);
    y = Math.abs(e);
    while(y) [x, y] = [y, x % y];

    if(x % 1 === 0){
        ans1 = ans1 / x;
        e = e / x;
        if(e !== 1){
            x = Math.abs(ans);
            y = Math.abs(e);
            while(y) [x, y] = [y, x % y];

            ans1 = ans1 / x;
            e = e / x;

            //Simplifying the fraction (if it is a fraction) by finding the GCF. If there's
            //no GCF to be found then the current answer is the final answer.
            x = Math.abs(ans1);
            y = Math.abs(e);
            while(y) [x, y] = [y, x % y];
            if(x % 1 === 0 && e / x !== 1){
                ans1 = ans1 / x;
                e = e / x;

                if(e === 1) ans1 = ans1;
                else ans1 = `${ans1 + '/' + e}`
            } else {
                if(e !== 1) ans1 = `${ans1 + '/' + e}`
                else ans1 = ans1;
            }
        } else ans1 = ans1;
    } else {
        if(e === 1) ans1 = ans1
        else ans1 = `${ans1 + '/' + e}`
    }

    return document.getElementById('res').innerHTML = `The roots are <b>${ans}</b> and <b>${ans1}</b>`
}

document.getElementById('sum').onclick = () => {
    const asub = Number(document.getElementById('asub').value);
    const n = Number(document.getElementById('n').value);
    const d = Number(document.getElementById('d').value);

    if(isNaN(asub) || isNaN(n) || isNaN(d) || Boolean(asub) === false || Boolean(n) === false || Boolean(d) === false) return document.getElementById('res4').innerHTML = 'Input a valid number!';

    let ans = (n / 2) * (2 * asub + (n - 1) * d);
    let s = [];

    s.push(`${n}/2 [(2(${asub}) + (${n} - 1)${d}]`);
    s.push(`${n / 2} [${2 * asub} + (${n - 1})(${d})]`);
    s.push(`${n / 2} (${2 * asub} + ${(n - 1) * d})`);
    s.push(`${n / 2} (${2 * asub + (n - 1) * d})`);
    s.push((n / 2) * (2 * asub + (n - 1) * d));

    return document.getElementById('res4').innerHTML = `The sum is <b>${ans}</b><br>Solution:<br>${s[0]}<br>${s[1]}<br>${s[2]}<br>${s[3]}<br><b>${s[4]}</b>`;
}

document.getElementById('sum1').onclick = () => {
    const asub = Number(document.getElementById('asub1').value);
    const asub1 = Number(document.getElementById('asub2').value);
    const n = Number(document.getElementById('n1').value);

    if(isNaN(asub) || isNaN(asub1) || isNaN(n) || Boolean(asub) === false || Boolean(asub1) === false || Boolean(n) === false) return document.getElementById('res5').innerHTML = 'Input a valid number!';

    let ans = (n / 2) * (asub + asub1);
    let s = [];

    s.push(`${n}/2 (${asub} + ${asub1})`);
    s.push(`${n / 2} (${asub + asub1})`);

    return document.getElementById('res5').innerHTML = `The sum is <b>${ans}</b><br>Solution:<br>${s[0]}<br>${s[1]}<br><b>${ans}</b>`
}

document.getElementById('sum2').onclick = () => {
    const asub = Number(document.getElementById("asub3").value);
    const r = Number(document.getElementById("r").value);
    const n = Number(document.getElementById("n2").value);

    if(isNaN(asub) || isNaN(r) || isNaN(n) || Boolean(asub) === false || Boolean(r) === false || Boolean(n) === false) return document.getElementById('res6').innerHTML = 'Input a valid number!';

    let ans = ((asub * (1 - Math.pow(r, n)))) / (1 - r)
    let s = [];

    s.push(`${asub} (1 - ${r}^${n}) / 1 - ${r}`);
    s.push(`${asub} (1 - ${Math.pow(r, n)}) / ${1 - r}`);
    s.push(`${asub} (${1 - Math.pow(r, n)}) / ${1 - r}`);
    s.push(`${asub * (1 - Math.pow(r, n))} / ${1 - r}`);

    return document.getElementById("res6").innerHTML = `The sum of the geometric sequence is <b>${ans}</b><br>Solution:<br>${s[0]}<br>${s[1]}<br>${s[2]}<br>${s[3]}<br><b>${ans}</b>`
}

document.getElementById('place').onclick = () => {
    const asub = Number(document.getElementById("as").value);
    const n = Number(document.getElementById("asn").value);
    const d = Number(document.getElementById("d1").value);

    if(isNaN(asub) || isNaN(n) || isNaN(d) || Boolean(asub) === false || Boolean(n) === false || Boolean(d) === false) return document.getElementById('res1').innerHTML = 'Input a valid number!';

    let ans = asub + ((n - 1) * d);
    let s = [];

    s.push(`${asub} + (${n} - 1) ${d}`)
    s.push(`${asub} + (${n - 1}) ${d}`)
    s.push(`${asub} + ${(n - 1) * d}`)

    return document.getElementById('res1').innerHTML = `The ${n + nth(n)} place in the sequence is <b>${ans}</b>.<br>Solution:<br><b>${s[0]}</b><br> <b>${s[1]}</b><br> <b>${s[2]}</b><br> <b>${ans}</b>`
}

document.getElementById('geoplace').onclick = () => {
    const asub = Number(document.getElementById("as1").value);
    const asub1 = Number(document.getElementById("asn1").value);
    const n = Number(document.getElementById("d2").value);

    if(isNaN(asub) || isNaN(asub1) || isNaN(n) || Boolean(asub) === false || Boolean(asub1) === false || Boolean(n) === false) return document.getElementById('res2').innerHTML = 'Input a valid number!';

    let ans = asub * ((asub1 / asub) ** (n - 1));
    let s = [];

    s.push(`${asub} (${asub1 / asub}^${n} - 1)`);
    s.push(`${asub} (${asub1 / asub}^${n - 1})`);
    s.push(`${asub} (${(asub1 / asub) ** (n - 1)})`);

    return document.getElementById('res2').innerHTML = `The ${n + nth(n)} place in the sequence is <b>${ans}</b>.<br>Solution:<br><b>${s[0]}</b><br> <b>${s[1]}</b><br> <b>${s[2]}</b><br> <b>${ans}</b>`
}

document.getElementById("mean").onclick = () => {
    const asub = Number(document.getElementById("asub6").value);
    const asubn = Number(document.getElementById("asub7").value);
    const n = Number(document.getElementById("n4").value);

    if(isNaN(asub) || isNaN(asubn) || isNaN(n) || Boolean(asub) === false || Boolean(asubn) === false || Boolean(n) === false) return document.getElementById('res9').innerHTML = 'Input a valid number!';

    const d = Math.round(10000 * (asubn - asub) / (n - 1)) / 10000
    let sol = [];
    let string = "";

    let sub = 2;
    function sequence(x, y){
        if(x + y < asubn){
            sol.push([
                `a sub ${sub} = ${x} + ${y}`,
                `a sub ${sub} = ${x + y}`
            ]);
            sub++;
            sequence(x + y, y);
        }
    }
    sequence(asub, d);

    for(let i = 0; i < sol.length; i++){
        string = string + `<br>${sol[i][0]}<br>${sol[i][1]}<br>`;
    }

    return document.getElementById("res9").innerHTML = `The difference is </b>${d}<b>.<br>Solution:${string}`;
}

document.getElementById("means").onclick = () => {
    const asub = Number(document.getElementById("asub4").value);
    const asubn = Number(document.getElementById("asub5").value);
    const n = Number(document.getElementById("n3").value);

    if(isNaN(asub) || isNaN(asubn) || isNaN(n) || Boolean(asub) === false || Boolean(asubn) === false || Boolean(n) === false) return document.getElementById('res7').innerHTML = 'Input a valid number!';

    const ratio = Math.round(10000 * (asubn ** (1 / (n - 1))) / (asub ** (1 / (n - 1)))) / 10000
    let sol = [];
    let string = "";

    let sub = 2;
    function sequence(x, y){
        if(x * y < asubn){
            sol.push([
                `a sub ${sub} = ${x} (${y})`,
                `a sub ${sub} = ${x * y}`
            ]);
            sub++;
            sequence(x * y, y);
        }
    }
    sequence(asub, ratio);

    for(let i = 0; i < sol.length; i++){
        string = string + `<br>${sol[i][0]}<br>${sol[i][1]}<br>`;
    }

    return document.getElementById("res7").innerHTML = `The common ratio is </b>${ratio}<b>.<br>Solution:${string}`;
}

document.getElementById('collatz').onclick = () => { let n = Number(document.getElementById('coll').value); if(n === 1 || n === 0 || isNaN(n) || Boolean(document.getElementById('coll').value) === false) return; b = []; for(n; n > 1;){ if(n % 2 !== 0){ n = n * 3 + 1; b.push(n); } else { n = n / 2; b.push(n); }; }; return document.getElementById('res8').innerHTML = `<b>${b.join(', ')}</b><br>This took ${b.length} ${b.length > 1 ? 'steps' : 'step'}.` };
