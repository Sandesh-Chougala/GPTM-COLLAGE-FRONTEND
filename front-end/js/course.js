function change() {
    const selection = document.getElementById('selection');
    const cse1 = document.getElementById('cse1');
    const ec1 = document.getElementById('ec1');

    if (selection.style.display === 'none' || selection.style.display === '') {
        selection.style.display = 'block';
    } else {
        selection.style.display = 'none';
        cse1.style.display = 'none';
        me1.style.display = 'none';
        ec1.style.display = 'none';
        ce1.style.display = 'none';
    }
}

function cse() {
    const cse1 = document.getElementById('cse1');
    const ec1 = document.getElementById('ec1');

    if (cse1.style.display === 'none' || cse1.style.display === '') {
        ec1.style.display = 'none';
        ce1.style.display = 'none';
        me1.style.display = 'none';
        cse1.style.display = 'block';
    } else {
        cse1.style.display = 'none';
    }
}

function ece() {
    const ec1 = document.getElementById('ec1');
    const cse1 = document.getElementById('cse1');

    if (ec1.style.display === 'none' || ec1.style.display === '') {
        cse1.style.display = 'none';
        ce1.style.display = 'none';
        me1.style.display = 'none';
        ec1.style.display = 'block';
    } else {
        ec1.style.display = 'none';
    }
}

function ce(){
    const ce1 = document.getElementById('ce1');
    const cse1 = document.getElementById('cse1');
    const ec1 = document.getElementById('ec1');

    if (ce1.style.display === 'none' || ce1.style.display === '') {
        cse1.style.display = 'none';
        ec1.style.display = 'none';
        ce1.style.display = 'block';
        me1.style.display = 'none';
    } else {
        ce1.style.display = 'none';
    }
}

 function me(){
    const me1 = document.getElementById('me1');
    const cse1 = document.getElementById('cse1');
    const ec1 = document.getElementById('ec1');
    const ce1 = document.getElementById('ce1');

    if (me1.style.display === 'none' || me1.style.display === '') {
        cse1.style.display = 'none';
        ec1.style.display = 'none';
        ce1.style.display = 'none';
        me1.style.display = 'block';
    } else {
        me1.style.display = 'none';
    }
 }
document.addEventListener('DOMContentLoaded', function() {
    const selection = document.getElementById('selection');   
    const btn = document.getElementById('course');      

    const cse1 = document.getElementById('cse1');
    const ec1  = document.getElementById('ec1');
    const ce1  = document.getElementById('ce1');
    const me1  = document.getElementById('me1');

    document.addEventListener('click', function(event) {
        if (
            selection &&
            !selection.contains(event.target) &&   
            event.target !== btn                   
        ) {
            selection.style.display = 'none';
            cse1.style.display = 'none';
            ec1.style.display = 'none';
            ce1.style.display = 'none';
            me1.style.display = 'none';
        }
    });
});

