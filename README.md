# งานหลังการทดลอง

> นาย อริยวัฒน์ โต๊ะเส็น
> 6210110616 Sec01

ในส่วนของ Commit afterLab_1 เป็นการเพิ่มการแสดงผลจำนวนครั้งที่เล่นเกมโดยเมื่อสิ้นสุดการเล่นแต่ละรอบจะมีการแสดงข้อความที่ Console ว่า "number of attempt = (จำนวนครั้งที่ทำการเล่น)  
ซึ่งแก้ไขโดยการ เพิ่มตัวแปรที่ return ใน prepareStateFromWord ของ WordCard.js  
จากนั้นทำการแก้ไขโค้ดโดยเพิ่มโค้ดด้านล่างนี้ลงไปใน function WordCard ในส่วนของ activationHandler ณ กรณี if-else ทั้งสองกรณี  
``state.times ++;``   
 ``console.log(`number of attempt = ${state.times}`)``  
 ซึ่ง `state.times` คือจำนวนครั้งที่นับโดยเมื่อจบการทำงาน 1 ครั้ง ค่าของ `state.times` ก็จะเพิ่มขึ้น 1 ซึ่งจะหายไปเมื่อสิ้นสุดการทำงาน

ในส่วนในส่วนของ Commit afterLab2 จะทำการเปลี่ยนเป็นสุ่มตัวอักษร 5 ตัวแล้วให้ทำการเรียงลำดับตัวอักษรจากลำดับแรกไปลำดับหลังสุด
ซึ่งโค้ดที่ใช้ในการเรียงตัวอักษรมีดังนี้

``function sortString(str){``

    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join(''); }   
 
ในส่วนในส่วนของ Commit afterLab3 จะทำการเพิ่มคำใบ้ใน console หากผู้ใช้เล่นผิดเป็นจำนวน 3 ครั้งขึ้นไป โดยครั้งที่ 3 จะใบ้ 1 ตัวอักษร  
ครั้งที่ 4 จะใบ้ 2 ตัวอักษร และทำการใบ้ 3 ตัวอักษรในครั้งที่ 5 โดยส่วนของโค้ดมีดังนี้

                if(state.times >= 3){
                    console.log(state.word[0])
                }
                if(state.times >= 4){
                    console.log(state.word[1])
                }
                if(state.times >= 5){
                    console.log(state.word[2])
                }

โดยคำสั่ง``console.log(state.word[x])``คือคำสั่งในการแสดงตัวอักษรใน console โดย x คือตำแหน่งของตัวอักษร
    
  
