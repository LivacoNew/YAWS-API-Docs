<script>
    import ContentSection from "../formatting/ContentSection.vue";
    import ContentHighlight from "../formatting/ContentHighlight.vue";
    import ContentLink from "../formatting/ContentLink.vue";
    import CodeBlock from "../formatting/CodeBlock.vue";
    import CodeInline from "../formatting/CodeInline.vue";
    import Warning from "../formatting/Warning.vue";

    export default {
        components: {
            ContentSection,
            ContentHighlight,
            ContentLink,
            CodeBlock,
            CodeInline,
            Warning
        }
    };
</script>

<template>
    <h1 class="text-3xl font-bold mb-2">Warnings</h1>
    <p class="mb-4">Anything related to fetching, giving or modifying warnings.</p>

    <ContentSection title="Fetch Warning by ID" id="warn-fetch-id">
        <Warning class="mb-8">This function uses Async logic! Ensure your incorporate this into your code!</Warning>

        <CodeInline>YAWS.API.FetchWarningByID(WarningID)</CodeInline>
        <h3 class="mt-4 text-xl">Description</h3>
        <p>Fetches data about a <ContentLink href="#data-warning" noRedir>Warning</ContentLink> from the database, using the Warning ID.</p>

        <h3 class="mt-4 text-xl">Parameters</h3>
        <ul class="list-disc list-inside">
            <li>WarningID: (String/Warning ID) The UUID of the warning to search for.</li>
        </ul>

        <h3 class="mt-4 text-xl">Returns</h3>
        <ul class="list-disc list-inside">
            <li><ContentLink href="#data-warning" noRedir>Warning</ContentLink> data if found.</li>
            <li><CodeInline>nil</CodeInline> if no warning was found.</li>
        </ul>

        <h3 class="mt-4 text-xl">Example</h3>
        <p>Fetches data about Warning ID 5abe8f14-9fa0-4e47-aa6c-27d85d892921</p>
        <CodeBlock>
            YAWS.API.FetchWarningByID("5abe8f14-9fa0-4e47-aa6c-27d85d892921")
                :next(function(data)
                    if(!data) then 
                        print("No warning found.")
                        return
                    end 

                    print("Warning Found:")
                    PrintTable(data)
                end)
                :catch(function(err)
                    print("Error: " .. err)
                end)
        </CodeBlock>
        <p>Output:</p>
        <CodeBlock>
            Warning Found:
            id      =       5abe8f14-9fa0-4e47-aa6c-27d85d892921
            adminSteamID64  =       76561198121018313
            adminSteamID    =       STEAM_0:1:80376292
            playerSteamID64 =       90071996842377216               (This is a Bot SteamID, hence why it's weird)
            playerSteamID   =       STEAM_0:0:0                     (This is a Bot SteamID, hence why it's weird)
            reason  =       You suck at CS:GO.
            points  =       3
            timestamp       =       1647900903
            server_id       =       darkrp
        </CodeBlock>
    </ContentSection>

    <ContentSection title="Fetch Player's Warnings" id="warn-fetch-player">
        <Warning class="mb-8">This function uses Async logic! Ensure your incorporate this into your code!</Warning>

        <CodeInline>YAWS.API.FetchWarningByPlayer(SteamID)</CodeInline>
        <h3 class="mt-4 text-xl">Description</h3>
        <p>Fetches data about all a player's <ContentLink href="#data-warning" noRedir>Warnings</ContentLink> from the database, by searching for their SteamID.</p>

        <h3 class="mt-4 text-xl">Parameters</h3>
        <ul class="list-disc list-inside">
            <li>SteamID: (String/SteamID) The SteamID/SteamID64 of the player.</li>
        </ul>

        <h3 class="mt-4 text-xl">Returns</h3>
        <ul class="list-disc list-inside">
            <li>A numerical table of <ContentLink href="#data-warning" noRedir>Warnings</ContentLink> if any are found.</li>
            <li><CodeInline>nil</CodeInline> if no warnings were found.</li>
        </ul>

        <h3 class="mt-4 text-xl">Example</h3>
        <p>Fetches a table of all warnings given to Livaco.</p>
        <CodeBlock>
            YAWS.API.FetchWarningByPlayer("STEAM_0:1:80376292")
                :next(function(data)
                    print("Warnings found:")
                    PrintTable(data)
                end)
                :catch(function(err)
                    print("Error: " .. err)
                end)
        </CodeBlock>
        <p>Output:</p>
        <CodeBlock>
            Warnings found:
            1:
                            id      =       7a70911a-0bfb-4386-b726-5f7c1a5145d9
                            adminSteamID64  =       76561198121018313
                            adminSteamID    =       STEAM_0:1:80376292
                            playerSteamID64 =       76561198121018313
                            playerSteamID   =       STEAM_0:1:80376292
                            reason  =       Playing too much Minecraft.
                            points  =       4
                            timestamp       =       1648160813
                            server_id       =       darkrp
            2:
                            id      =       ca75f4bb-c982-4ee5-bb96-fe8633551fcf
                            adminSteamID64  =       76561198121018313
                            adminSteamID    =       STEAM_0:1:80376292
                            playerSteamID64 =       76561198121018313
                            playerSteamID   =       STEAM_0:1:80376292
                            reason  =       Being too lustful for Judy.
                            points  =       3
                            timestamp       =       1648250950
                            server_id       =       darkrp
        </CodeBlock>
    </ContentSection>

    <ContentSection title="Deleting Warnings" id="warn-remove">
        <CodeInline>YAWS.API.DeleteWarningByID(WarningID)</CodeInline>
        <h3 class="mt-4 text-xl">Description</h3>
        <p>Deletes a <ContentLink href="#data-warning" noRedir>Warning</ContentLink> via the Warning ID.</p>

        <h3 class="mt-4 text-xl">Parameters</h3>
        <ul class="list-disc list-inside">
            <li>WarningID: (String/Warning ID) The UUID of the warning to delete.</li>
        </ul>

        <h3 class="mt-4 text-xl">Returns</h3>
        This function doesn't return anything.

        <h3 class="mt-4 text-xl">Example</h3>
        <p>Deletes warning 5abe8f14-9fa0-4e47-aa6c-27d85d892921.</p>
        <CodeBlock>
            YAWS.API.DeleteWarningByID("5abe8f14-9fa0-4e47-aa6c-27d85d892921")
        </CodeBlock>
    </ContentSection>
</template>