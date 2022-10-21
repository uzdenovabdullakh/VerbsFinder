let count = 0;
export function TablePaint(arr){

    if (count>0){
        let el = document.getElementById('table');
        el.remove();
    }
    let table = document.createElement('table');
    table.setAttribute('id','table');
    table.style.width = "600px";
    table.style.margin = "0 auto";
    table.style.marginTop = "60px";
    table.style.borderCollapse="collapse";
    table.style.border="3px solid #de0b0b";
    
    table.style.fontFamily="sans-serif";
   

    let tr_1 =  document.createElement('tr');
    let tr_2 =  document.createElement('tr');


    let th_1 =  document.createElement('th');
    let th_2 =  document.createElement('th');
    let th_3 =  document.createElement('th');
    let th_4 =  document.createElement('th');

    th_1.setAttribute('scope','col');
    th_1.innerHTML="Infinitive";
    th_1.style.padding="10px";
    th_2.setAttribute('scope','col');
    th_2.innerHTML="Past Simple";
    th_2.style.padding="10px";
    th_3.setAttribute('scope','col');
    th_3.innerHTML="Past Participle";
    th_3.style.padding="10px";
    th_4.setAttribute('scope','col');
    th_4.innerHTML="Перевод";
    th_4.style.padding="10px";
    
    tr_1.appendChild(th_1);
    tr_1.appendChild(th_2);
    tr_1.appendChild(th_3);
    tr_1.appendChild(th_4);
    if (arr[0]!=="Это правильный глагол или не глагол"){

    let th_1_1 =  document.createElement('th');
    let td_2 =  document.createElement('td');
    let td_3 =  document.createElement('td');
    let td_4 =  document.createElement('td');


    th_1_1.setAttribute('scope','col');
    th_1_1.style.padding="10px";
    td_2.style.padding="10px";
    td_3.style.padding="10px";
    td_4.style.padding="10px";

    td_2.style.textAlign="center";
    td_3.style.textAlign="center";
    td_4.style.textAlign="center";

    th_1_1.innerHTML = arr[0];
    td_2.innerHTML = arr[1];
    td_3.innerHTML = arr[2];
    td_4.innerHTML = arr[3];

    tr_2.appendChild(th_1_1);
    tr_2.appendChild(td_2);
    tr_2.appendChild(td_3);
    tr_2.appendChild(td_4);
    }
    else {
     let td =  document.createElement('td');
     td.style.padding="10px";
     td.style.textAlign="center";
     td.setAttribute('colspan','4');
     td.innerHTML = arr[0];
     tr_2.appendChild(td);
    }
    tr_1.style.background = "#eee";
    tr_2.style.background = "#ccc";
    table.appendChild(tr_1);
    table.appendChild(tr_2);
    document.body.append(table);
    count++;
}