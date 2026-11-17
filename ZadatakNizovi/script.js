var names = ['John', 'Jane', 'Bob', , 'Mike'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.push('Bruno');

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);

    if (names[i] === 'Jane') {
        break;
    }
}