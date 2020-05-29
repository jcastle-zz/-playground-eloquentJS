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

// TODO: Have to figure out how to output to HTML page for easy copy and paste
// const paragraph = document.querySelector('p');
// paragraph.innerText = JSON.stringify(vcsSummary).replace(/[\[\]/{\}"]/g, "");
// paragraph.innerText = JSON.stringify(vcsSummary, null, " ");

// calculate the sum counts for all platforms
var vcsTotal = vcsSummary.reduce(function(prev, cur) {
    return prev + cur.count;
  }, 0);

// divide count for each repo by sum for all platforms to get a %
vcsSummary.forEach(function(item) {
    console.log(`${item.platform}: ${(item.count / vcsTotal * 100).toFixed(2) + '%'}`);
});

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