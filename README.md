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
    
    
  
