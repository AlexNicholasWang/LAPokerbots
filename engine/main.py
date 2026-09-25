import random
import sys
import os

def judgeHand(cards):
    '''
    hand ranks
    0 - all 0s plus any wild
    1 - quads
    2 - sequence in one color
    3 - triple and pair
    4 - triple
    5 - all one color
    6 - sequence in mixed colors
    7 - two pairs
    8 - pair
    9 - high card
    '''
    # order = 0123456789SDRW
    order = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'S': 10, 'D': 11, 'R': 12, 'W': 13}
    colors = ['R', 'Y', 'G', 'B']
    highCard = 0
    for i in range(0, 5):
        if(order[cards[i][1]] >= highCard):
            highCard = order[cards[i][1]]
    values = []
    for i in range(0, 5):
        if(order[cards[i][1]] not in values):
            values.append(order[cards[i][1]])
    zeroes = 0
    hasWild = False
    for i in range(0, 5):
        if(cards[i][1] == '0'):
            zeroes += 1
        elif(cards[i][1] == 'W'):
            hasWild = True
    if(zeroes == 4 and hasWild == True):
        return([0, order['W']])
    for i in range(0, 5):
        cardToCheck = cards[i][1]
        count = 0
        for j in range(0, 5):
            if(cards[j][1] == cardToCheck):
                count += 1
        if(count == 4):
            return([1, order[cardToCheck]])
    for color in colors:
        isSameColor = True
        for i in range(0, 5):
            if(cards[i][0] != color):
                isSameColor = False
                break
        if(isSameColor):
            isSequence = True
            for i in range(0, 5):
                if((highCard - i) not in values):
                    isSequence = False
                    break
            if(isSequence):
                return([2, highCard])
    for i in range(0, 5):
        cardToCheck = cards[i][1]
        count = 0
        for j in range(0, 5):
            if(cards[j][1] == cardToCheck):
                count += 1
            if(count == 3):
                for k in range(0, 5):
                    if(cards[k][1] != cardToCheck):
                        for l in range(k + 1, 5):
                            if(cards[l][1] == cards[k][1]):
                                return([3, order[cardToCheck]])
                return([4, order[cardToCheck]])
    for color in colors:
        isAllSameColor = True
        for i in range(0, 5):
            if(cards[i][0] != color):
                isAllSameColor = False
                break
        if(isAllSameColor):
            return([5, highCard])
    isSequence = True
    for i in range(0, 5):
        if((highCard - i) not in values):
            isSequence = False
            break
    if(isSequence):
        return([6, highCard])
    if(len(values) == 3):
        freqs = {values[0]: 0, values[1]: 0, values[2]: 0}
        for i in range(0, 5):
            freqs[order[cards[i][1]]] += 1
        highPair = values[0]
        for freq in freqs:
            if(freqs[freq] == 2 and freq > highPair):
                highPair = freq
        return([7, highPair])
    if(len(values) == 4):
        pairValue = values[0]
        for i in range(0, 5):
            count = 0
            for j in range(0, 5):
                if(cards[i][1] == cards[j][1]):
                    count += 1
            if(count == 2):
                pairValue = order[cards[i][1]]
        return([8, pairValue])
    return([9, highCard])
def parseCard(cardNum):
    # colors, R, Y, G, B
    # for each color, 0123456789123456789SDRSDRW
    # S is skip, D is draw two, R is reverse, W is wild
    card = ""
    color = (cardNum - (cardNum % 26)) / 26
    if(color == 0):
        card += 'R'
    elif(color == 1):
        card += 'Y'
    elif(color == 2):
        card += 'G'
    elif(color == 3):
        card += 'B'
    value = cardNum % 26
    if(value == 0):
        card += '0'
    elif(value == 1 or value == 10):
        card += '1'
    elif(value == 2 or value == 11):
        card += '2'
    elif(value == 3 or value == 12):
        card += '3'
    elif(value == 4 or value == 13):
        card += '4'
    elif(value == 5 or value == 14):
        card += '5'
    elif(value == 6 or value == 15):
        card += '6'
    elif(value == 7 or value == 16):
        card += '7'
    elif(value == 8 or value == 17):
        card += '8'
    elif(value == 9 or value == 18):
        card += '9'
    elif(value == 19 or value == 22):
        card += 'S'
    elif(value == 20 or value == 23):
        card += 'D'
    elif(value == 21 or value == 24):
        card += 'R'
    elif(value == 25):
        card += 'W'
    return(card)

def runRound(playerCount, playerBalances, playerAlgorithmFilePaths):
    bets = []
    for i in range(0, playerCount):
        bets.append([-1,-1,-1,-1])
    cardNums = []
    for i in range(0, 103):
        cardNums.append(i)
    commonCards = []
    for i in range(0, 5):
        cardNum = random.randint(0, 103)
        while(cardNum not in cardNums):
            cardNum = random.randint(0, 103)
        commonCards.append(parseCard(cardNum))
        cardNums.remove(cardNum)
    playerCards = []
    for i in range(0, playerCount):
        currentPlayerCards = []
        for i in range(0, 2):
            cardNum = random.randint(0, 103)
            while(cardNum not in cardNums):
                cardNum = random.randint(0, 103)
            currentPlayerCards.append(parseCard(cardNum))
            cardNums.remove(cardNum)
        playerCards.append(currentPlayerCards)
    cardsShown = 0
    betRound = 0
    cardsHidden = 0
    indexesHidden = []
    for i in range(0, playerCount):
        for j in range(0, 2):
            if(playerCards[i][j][1] == 'D'):
                isStillDrawing = True
                while(isStillDrawing):
                    cardNum = random.randint(0, 103)
                    while(cardNum not in cardNums):
                        cardNum = random.randint(0, 103)
                    commonCards.append(parseCard(cardNum))
                    cardNums.remove(cardNum)
                    if(commonCards[len(commonCards) - 1][1] != 'D'):
                        isStillDrawing = False
    for i in range(0, 5):
        if(commonCards[i][1] == 'D'):
            isStillDrawing = True
            while(isStillDrawing):
                cardNum = random.randint(0, 103)
                while(cardNum not in cardNums):
                    cardNum = random.randint(0, 103)
                commonCards.append(parseCard(cardNum))
                cardNums.remove(cardNum)
                if(commonCards[len(commonCards) - 1][1] != 'D'):
                    isStillDrawing = False
    print(playerCards)
    print(commonCards)
    print(judgeHand(["G9", "G3", "GW", "G5", "Y2"])) # bookmark
    for i in range(0, playerCount):
        for j in range(0, 2):
            if(playerCards[i][j][1] == 'S'):
                indexesHidden.append(cardsHidden)
                cardsHidden += 1
    for i in range(0, len(commonCards)):
        if(commonCards[i][1] == 'S'):
            indexesHidden.append(cardsHidden)
            cardsHidden += 1
    while(betRound < 4):
        isRoundGoing = True
        betsDoneInRound = 0
        while(isRoundGoing):
            for i in range(0, playerCount):
                f = open("in.txt", mode = 'w')
                ''' example in.txt for pre-flop
                G5 YD # your cards
                ?? ?? ?? ?? ?? # common cards
                1000000 # your balance
                -1 -1 -1 -1 # current bets of players, -1 means hasnt betted yet, each row is a player
                -1 -1 -1 -1 YOU # tells you which player you are
                -1 -1 -1 -1
                -1 -1 -1 -1
                1000000 999999 100000 50 # all players balances, in same order as rows of bets
                '''
                for card in playerCards[i]:
                    f.write(f"{card} ")
                f.write("\n")
                cardsToShow = ""
                for j in range(0, cardsShown):
                    if j in indexesHidden:
                        cardsToShow += "?? "
                    else:
                        cardsToShow += f"{commonCards[j]} "
                for k in range(cardsShown, len(commonCards)):
                    cardsToShow += "?? "
                f.write(cardsToShow)
                f.write("\n")
                f.write(f"{playerBalances[i]}\n")
                for j in range(0, playerCount):
                    for bet in bets[j]:
                        f.write(f"{bet} ")
                    if(j == i):
                        f.write("YOU ")
                    f.write("\n")
                for balance in playerBalances:
                    f.write(f"{balance} ")
                f.write("\n")
                f.close()
                # run algorithm
                if(bets[i][betRound] != -2 and bets[i][betRound] != -3):
                    try:
                        '''f = open("out.txt", mode = 'r')
                        betAmount = int(f.readline())'''
                        betAmount = int(input(f"You are player {i}. what would you like to bet?\n"))
                        if(betAmount > playerBalances[i] or betAmount < 0):
                            for j in range(betRound, 4):
                                bets[i][j] = -2
                            f.close()
                            continue
                        else:
                            playerBalances[i] -= betAmount
                            if(bets[i][betRound] >= 0):
                                bets[i][betRound] += betAmount # if already betted, bet additional amount
                            else:
                                bets[i][betRound] = betAmount
                        if(playerBalances[i] == 0):
                            for j in range(betRound + 1, 4):
                                bets[i][j] = -3 # -3 means all in
                        for j in range(0, playerCount):
                            if(bets[j][betRound] >= 0 and bets[j][betRound] > bets[i][betRound] and playerBalances[i] != 0):
                                playerBalances[i] += bets[i][betRound]
                                for k in range(betRound, 4):
                                    bets[i][k] = -2
                                break
                        #f.close()
                    except Exception as e:
                        print(e)
                        for j in range(betRound, 4):
                            bets[i][j] = -2
                    print(bets)
                    os.remove("in.txt")
                    #os.remove("out.txt")
                playersDone = 0
                for i in range(0, playerCount):
                    if(bets[i][3] == -2 or playerBalances[i] == 0):
                        playersDone += 1
                if(playersDone == playerCount - 1):
                    betRound = 4
                    isRoundGoing = False
                    break
                betsDoneInRound += 1
                if(betsDoneInRound >= playerCount):                        
                    currentBet = 0
                    areAllSame = True
                    for i in range(0, playerCount):
                        if(bets[i][betRound] >= 0 and bets[i][betRound] != playerBalances[i]):
                            currentBet = bets[i][betRound]
                            break
                    for i in range(0, playerCount):
                        if(bets[i][betRound] >= 0 and bets[i][betRound] != playerBalances[i]):
                            if(bets[i][betRound] != currentBet):
                                areAllSame = False
                    if(areAllSame == True):
                        isRoundGoing = False
                        break
        if(betRound == 0):
            cardsShown = 3
        elif(betRound == 1):
            cardsShown = 4
        elif(betRound == 2):
            cardsShown = 5
        betRound += 1
    direction = 1
    for hand in playerCards:
        for card in hand:
            if(card[1] == 'R'):
                direction *= -1
    for card in commonCards:
        if(card[1] == 'R'):
            direction *= -1
    print(direction)
    return(playerBalances) # before this do rankings and give winner money
def main():
    playerCount = len(sys.argv) - 1
    playerBalances = [1000000] * playerCount
    playerAlgorithmFilePaths = []
    for i in range(0, playerCount):
        playerAlgorithmFilePaths.append(sys.argv[i + 1])
    playerBalances = runRound(playerCount, playerBalances, playerAlgorithmFilePaths)
    print(playerBalances)
if __name__ == "__main__":
    main()
