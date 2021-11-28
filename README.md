# Our Multi Metaverse

## What is it?

At the beginning, it just a very simple NFT minter in Discord(Before 20th Oct 2021, [check out here](https://github.com/ntb-hackthon/mars-asia-hackathon-2021) )

It just can setup one pinata key in discord, and mint NFT.

Now, it has a lot more features.

### 1. Use multiple Pinata in Discord && Mint NFT in Discord by multiple Pinata account

- manage multiple pinata key in discord, that turn all discord user can use infinite IPFS store.
- has a secret link to our web-ui to see your IPFS file and manage them.
- we can use multiple pinatak key to uploda file to IPFS, so we can use them to mint more NFTs!!
- we now have a web-ui to see all of your minted NFT in current discord server!
- we also list all other user's NFT in the web-ui(the same contract but different owner)
- [video demo](https://www.youtube.com/watch?v=dx7xbWDA3Bw)
- [screenshot](https://github.com/ntb-hackthon/hackthon-demo/screenshot/pinata-nft-mint)

### 2. buy DiscordTicket NFT

- while user do not have the DT NFT, they can not access special channel.
- user can go to "bind wallet" channel to use the `/bind-wallet` splash cmd to get private link to bind wallet
- user jump to our web ui, then connect wallet
- user can mint the DiscordTicket NFT, the NFT will send 10% of the payment to random owner(using ChainLink VRF), the NFT [contract here](https://mumbai.polygonscan.com/address/0xe32c9dc41ae44e2f8793395bf95793507ae4d83b#internaltx) with internal transaction to random owner ;)
- user go back to discord use the `~upgrade` cmd to verify his/her binded wallet address has the NFT(we use the alchemy JSON RPC SERVER to read the data)
- user get "VIP1" role
- [video demo](https://www.youtube.com/watch?v=h-ciHrgki40)
- [screenshot](https://github.com/ntb-hackthon/hackthon-demo/screenshot/discord-ticket)

## Tech usage

- pinata(IPFS), Polygon
- api server to return user data
- discord bot server to interact with user
- ethersjs in nodejs
- moralis( [crypto Login](https://docs.moralis.io/moralis-server/users/crypto-login), [token](https://docs.moralis.io/moralis-server/web3-sdk/token), [cloud function](https://docs.moralis.io/moralis-server/cloud-code/cloud-functions) )
- vue3, tailwindcss
- chainlink (to make the DiscordTicket Contract with 10% payment send to random owner)
- NFT Port, try it in discord channel here: <https://discord.gg/3cxBW68TpF>
- use Alchemy JSON RPC in our discord bot server to quickly get new NFT mint status
- other chain can work too: Avalanche, HECO, Solana, BSC, Harmony, NEAR

## Code Link

<https://github.com/ntb-hackthon/hackthon-demo>

As the bot maybe develop as a SaaS later then so for now we do not public all the discord bot
code, we just share the code for the [pinata](https://github.com/ntb-hackthon/hackthon-demo/code-sample/pinata.js), [polygonMint](https://github.com/ntb-hackthon/hackthon-demo/code-sample/polygonMint.js), [bind wallet](https://github.com/ntb-hackthon/hackthon-demo/code-sample/bind-wallet.js).

## Online Demo

Your can try it by two methods.

1. access the discord channel direct: <https://discord.gg/mqBksZ9qtz>
2. invite the bot into your own guild, invite link: <https://discord.com/api/oauth2/authorize?client_id=892688696967593995&permissions=8&scope=bot%20applications.commands>
3. [Youtube Video Demo PlayList](https://www.youtube.com/playlist?list=PLJrAIkwtXFJDS5gWqmDqamrZV83jsFunL)
