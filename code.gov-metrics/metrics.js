// Summary by VCS
const vcsSummary = [
    { platform: 'GitHub', count: 5229 },
    { platform: 'Other', count: 2303 },
    { platform: 'Drupal', count: 10 }, 
    { platform: 'GitLab', count: 28 }, 
    { platform: 'BitBucket', count: 41 }, 
    { platform: 'SVN', count: 2 },
    { platform: 'TFS', count: 2 },
    { platform: 'VSS', count: 1 },
]

vcsSummary.forEach(function (item) {
    console.log(`${item.platform}: ${item.count}`);
});

// calculate the sum counts for all platforms
var vcsTotal = vcsSummary.reduce(function(prev, cur) {
    return prev + cur.count;
  }, 0);


const output = document.querySelector('.vcs-summary-output');
// paragraph.innerText = JSON.stringify(vcsSummary).replace(/[\[\]/{\}"]/g, "");
// paragraph.innerText = JSON.stringify(vcsSummary, null, " ");

// loop through each vcsSummary object, store platform and count values in memory, append to page in li
vcsSummary.forEach(platform => {
    var elm = document.createElement('li');
    var span = document.createElement('span');
    span.classList.add('percent-gray');
    elm.innerHTML = `${platform.platform}: ${platform.count} `;
    span.innerHTML = `(${(platform.count / vcsTotal * 100).toFixed(2) + '%'})`;
    elm.appendChild(span);
    output.appendChild(elm);
})

// Total count should be same for VCS and Usage Type
console.log(`Total count for all VCS platforms: ${vcsTotal}`);

// Summary by Usage Type
const usageTypeSummary = [
    { usageType: 'openSource', count: 5466 },
    { usageType: 'governmentWideReuse', count: 1696 },
    { usageType: 'exemptByAgencySystem', count: 77 }, 
    { usageType: 'exemptByLaw', count: 158 }, 
    { usageType: 'exemptByPolicyDate', count: 33 }, 
    { usageType: 'exemptByCIO', count: 82 },
    { usageType: 'exemptByAgencyMission', count: 98 },
    { usageType: 'other', count: 2 },
    { usageType: 'exemptByNationalSecurity', count: 4 },
]
usageTypeSummary.forEach(function (item) {
    console.log(`${item.usageType}: ${item.count}`);
});

var usageTypeTotal = usageTypeSummary.reduce(function(prev, cur) {
    return prev + cur.count;
  }, 0);

  // Total count should be same for VCS and Usage Type
console.log(`Total count for all Usage Types: ${usageTypeTotal}`);

usageTypeSummary.forEach(function(item) {
    console.log(`${item.usageType}: ${(item.count / usageTypeTotal * 100).toFixed(2) + '%'}`);
});