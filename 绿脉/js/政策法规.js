document.getElementById('confirm').addEventListener('click', function() {
    const region = document.getElementById('region').value;
    const enterpriseType = document.getElementById('enterprise-type').value;
    const regulationType = document.getElementById('regulation-type').value;

    if (region && enterpriseType && regulationType) {
        document.getElementById('result-message').textContent = 
            `您输入的信息：\n所在地域：${region}\n企业类型：${enterpriseType}\n法规类型：${regulationType}`;
    } else {
        document.getElementById('result-message').textContent = '请填写所有的查询信息。';
    }
});

document.getElementById('cancel').addEventListener('click', function() {
    document.getElementById('region').value = '';
    document.getElementById('enterprise-type').selectedIndex = 0;
    document.getElementById('regulation-type').selectedIndex = 0;
    document.getElementById('result-message').textContent = '';
});