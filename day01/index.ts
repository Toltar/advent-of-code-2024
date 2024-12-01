import {readFileSync} from 'fs';

function getInput(): string {
  const fileContents = readFileSync('./input.txt', 'utf8');
  return fileContents;
}

function calculateDistances(leftList: number[], rightList: number[]) {
  const distances = leftList.map((leftListItem, index) => {
    const rightListItem = rightList[index];

    if ( rightListItem > leftListItem ) {
      return rightListItem - leftListItem;
    }
    return leftListItem - rightListItem;
  });

  let totalDistance = 0;

  for (const distance of distances) {
    totalDistance += distance;
  }

  console.log('Total Distance:', totalDistance);
}

function calculateSimilarityScore(leftList: number[], rightList: number[]) {
  let similarityScore = 0;
  for (const leftListItem of leftList) {
    let numberOfTimesInRightList = 0;
    for (const rightListItem of rightList) {
      if (leftListItem === rightListItem) {
        numberOfTimesInRightList += 1;
      }
    };
    similarityScore += (leftListItem * numberOfTimesInRightList);
  };

  console.log('Similarity Score:', similarityScore);
}

function main() { 
  const inputFileContents = getInput();

  const initialListPairs = inputFileContents.split('\n')
                        .map(listPair => listPair.split('   ').map(item => Number.parseInt(item)));
  const leftList = initialListPairs.map(listPair => listPair[0]).sort();
  const rightList = initialListPairs.map(listPair => listPair[1]).sort();

  // Trash the Undefined elements at the end
  leftList.pop();
  rightList.pop();

  calculateDistances(leftList, rightList);
  calculateSimilarityScore(leftList, rightList);
}

main();
